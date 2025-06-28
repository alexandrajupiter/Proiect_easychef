import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Modal } from 'react-native';
import Colors from '../../constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { commonStyles } from '@/constants/Styles';
import { auth, db } from '../../backend/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { styles } from './styles/BarcodeResults.styles';
// tip pentru produsul scanat
interface Product {
  name: string;
  brand: string;
  category: string;
  image: string;
}

export default function BarcodeResultsScreen() {
  const { scannedCode } = useLocalSearchParams<{ scannedCode: string }>();
  // state pentru produs, incarcare, campuri custom, modale
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [customName, setCustomName] = useState('');
  const [customBrand, setCustomBrand] = useState('');
  const [customCategory, setCustomCategory] = useState('');
  const [quantityModalVisible, setQuantityModalVisible] = useState(false);
  const [quantityInput, setQuantityInput] = useState('');
  const router = useRouter();

  useEffect(() => {
    fetchProductInfo();
  }, [scannedCode]);

  // incarca informatii despre produsul scanat din openfoodfacts
  const fetchProductInfo = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${scannedCode}.json`);
      const data = await response.json();
      if (data.status === 1 && data.product) {
        // produs gasit
        setProduct({
          name: data.product.product_name || '',
          brand: data.product.brands || '',
          category: data.product.categories || '',
          image: data.product.image_url || '',
        });
        setCustomName(data.product.product_name || '');
        setCustomBrand(data.product.brands || '');
        setCustomCategory(data.product.categories || '');
      } else {
        // nu a fost gasit, se completeaza manual
        setProduct(null);
        setCustomName('');
        setCustomBrand('');
        setCustomCategory('');
      }
    } catch (error) {
      console.error('Error fetching product info:', error);
      setProduct(null);
      setCustomName('');
      setCustomBrand('');
      setCustomCategory('');
      Alert.alert('Error', 'Failed to fetch product information');
    } finally {
      setLoading(false);
    }
  };

  // confirma adaugarea in camara
  const handleAddToPantry = () => {
    Alert.alert(
      'Future Improvement',
      'This feature is part of our future improvements. Would you like to continue adding the ingredient to your pantry?',
      [
        {
          text: 'Cancel Adding',
          style: 'cancel',
          onPress: () => {},
        },
        {
          text: 'Keep Adding',
          onPress: () => setQuantityModalVisible(true),
        },
      ]
    );
  };

  // adauga totusi ingredientul in camara userului
  const addToPantry = async () => {
    try {
      const user = auth.currentUser;
      if (!user) {
        Alert.alert('Error', 'You must be logged in to add ingredients');
        return;
      }

      const name = product ? product.name : customName;
      if (!name) {
        Alert.alert('Error', 'Product name is required');
        return;
      }

      if (!quantityInput || isNaN(Number(quantityInput)) || Number(quantityInput) <= 0) {
        Alert.alert('Invalid quantity', 'Please enter a valid quantity greater than 0');
        return;
      }

      // adaugam in firebase pantry
      const userPantryRef = doc(db, 'users', user.uid, 'ingredients', 'pantry');
      const pantryDoc = await getDoc(userPantryRef);
      const currentPantry = pantryDoc.exists() ? pantryDoc.data() : {};
      
      // folosim numele cu litere mici ca si cheie
      const pantryKey = name.toLowerCase();
      
      currentPantry[pantryKey] = {
        quantity: `${quantityInput}g`,
        measurementType: 'weight'
      };

      await setDoc(userPantryRef, currentPantry);

      setQuantityModalVisible(false);
      Alert.alert('Success', 'Ingredient added to pantry', [
        {
          text: 'OK',
          onPress: () => router.back(),
        },
      ]);
    } catch (error) {
      console.error('Error adding ingredient:', error);
      Alert.alert('Error', 'Failed to add ingredient to pantry');
    }
  };

  if (loading) {
    return (
      <>
        <SafeAreaView style={styles.centered} edges={["left", "right"]}>
          <ActivityIndicator size="large" color={Colors.primary} />
          <Text style={styles.loadingText}>Loading ingredient information...</Text>
        </SafeAreaView>
        <SafeAreaView style={{ backgroundColor: Colors.bar }} edges={["bottom"]} />
      </>
    );
  }

  return (
    <>
      <SafeAreaView style={styles.container} edges={["left", "right"]}>
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>Product Information</Text>
            <Text style={styles.barcode}>Barcode: {scannedCode}</Text>
          </View>

          {product ? (
            <>
              {product.image ? (
                <View style={styles.imageContainer}>
                  <Image
                    source={{ uri: product.image }}
                    style={styles.productImage}
                    resizeMode="contain"
                  />
                </View>
              ) : null}
              <View style={styles.infoContainer}>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Ingredient name: </Text>
                  <View style={[styles.input, styles.readOnlyInput]}>
                    <Text style={styles.readOnlyText}>{product.name}</Text>
                  </View>
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Brand: </Text>
                  <View style={[styles.input, styles.readOnlyInput]}>
                    <Text style={styles.readOnlyText}>{product.brand}</Text>
                  </View>
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Category: </Text>
                  <View style={[styles.input, styles.readOnlyInput]}>
                    <Text style={styles.readOnlyText}>{product.category}</Text>
                  </View>
                </View>
              </View>
            </>
          ) : (
            <View style={styles.infoContainer}>
              <Text style={styles.notFoundText}>
                <Ionicons name="information-circle" size={20} color={Colors.error} /> Product not found. Please enter details manually.
              </Text>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Ingredient name: </Text>
                <TextInput
                  style={styles.input}
                  value={customName}
                  onChangeText={setCustomName}
                  placeholder="Enter ingredient name"
                  placeholderTextColor={Colors.textLight}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Brand: </Text>
                <TextInput
                  style={styles.input}
                  value={customBrand}
                  onChangeText={setCustomBrand}
                  placeholder="Enter brand name"
                  placeholderTextColor={Colors.textLight}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Category: </Text>
                <TextInput
                  style={styles.input}
                  value={customCategory}
                  onChangeText={setCustomCategory}
                  placeholder="Enter category"
                  placeholderTextColor={Colors.textLight}
                />
              </View>
            </View>
          )}

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={commonStyles.primaryButton} onPress={handleAddToPantry}>
              <Text style={commonStyles.primaryButtonText}>Add To My Pantry</Text>
            </TouchableOpacity>
            <TouchableOpacity style={commonStyles.logoutButton} onPress={() => router.back()}>
              <Text style={commonStyles.logoutButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <Modal
          visible={quantityModalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setQuantityModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>
                Enter Quantity
              </Text>
              <View style={styles.quantityInputContainer}>
                <TextInput
                  style={styles.quantityInput}
                  placeholder="Enter quantity"
                  value={quantityInput}
                  onChangeText={text => {
                    // Allow only numbers and a single decimal point
                    const cleaned = text.replace(/[^\d.]/g, '');
                    const parts = cleaned.split('.');
                    if (parts.length > 2) {
                      setQuantityInput(parts[0] + '.' + parts.slice(1).join(''));
                    } else {
                      setQuantityInput(cleaned);
                    }
                  }}
                  keyboardType="numeric"
                  autoFocus
                />
                <Text style={styles.unitText}>g</Text>
              </View>
              
              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={[styles.modalButton, styles.cancelButton]}
                  onPress={() => {
                    setQuantityModalVisible(false);
                    setQuantityInput('');
                  }}
                >
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.modalButton, styles.confirmButton]}
                  onPress={addToPantry}
                >
                  <Text style={[styles.buttonText, styles.confirmButtonText]}>
                    Add to Pantry
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
      <SafeAreaView style={{ backgroundColor: Colors.bar }} edges={["bottom"]} />
    </>
  );
}

