import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';
import { commonStyles } from '../../../constants/Styles';

export const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'flex-end',
    },
    modalContent: {
      backgroundColor: '#fff',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      height: '80%',
      padding: 16,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: Colors.text,
    },
    closeButton: {
      padding: 4,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
      borderRadius: 8,
      paddingHorizontal: 12,
      marginBottom: 16,
    },
    searchIcon: {
      marginRight: 8,
    },
    searchInput: {
      flex: 1,
      height: 40,
      fontSize: 16,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    errorContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    errorText: {
      color: Colors.error,
      fontSize: 16,
      textAlign: 'center',
    },
    recipeList: {
      paddingBottom: 16,
    },
    recipeItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 12,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
    },
    recipeImage: {
      width: 60,
      height: 60,
      borderRadius: 8,
      marginRight: 12,
    },
    recipeDetails: {
      flexDirection: 'column',
    },
    recipeTitle: {
      flex: 1,
      fontSize: 16,
      color: Colors.text,
    },
    emptyText: {
      textAlign: 'center',
      color: Colors.text,
      marginTop: 32,
      fontSize: 16,
    },
    tabRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    tabButton: {
      padding: 8,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
    },
    tabButtonActive: {
      borderColor: Colors.primary,
    },
    tabText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: Colors.text,
    },
    tabTextActive: {
      color: Colors.primary,
    },
    filterContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 16,
      paddingHorizontal: 5,
    },
    filterButton: {
      flex: 1,
      backgroundColor: '#ffffff',
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 8,
      marginHorizontal: 5,
      borderWidth: 1,
      borderColor: '#d1d1d1',
      alignItems: 'center',
    },
    filterButtonActive: {
      backgroundColor: Colors.primary,
      borderColor: Colors.primary,
    },
    filterButtonText: {
      color: Colors.text,
      fontSize: 14,
      fontWeight: '500',
    },
    filterButtonTextActive: {
      color: '#ffffff',
    },
    userGeneratedBadge: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: Colors.primary,
      borderRadius: 4,
      padding: 4,
      marginTop: 4,
    },
    userGeneratedText: {
      color: Colors.background,
      fontSize: 12,
      fontWeight: 'bold',
      marginLeft: 4,
    },
    filterChip: {
      height: 40,
      minWidth: 48,
      paddingVertical: 0,
      paddingHorizontal: 14,
      borderRadius: 20,
      backgroundColor: Colors.card,
      marginRight: 10,
      marginBottom: 4,
      borderWidth: 1,
      borderColor: Colors.border,
      shadowColor: 'transparent',
      elevation: 0,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    filterChipSelected: {
      backgroundColor: Colors.primary,
      borderColor: Colors.primary,
      shadowColor: Colors.primary,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.12,
      shadowRadius: 6,
      elevation: 2,
    },
    filterChipText: {
      color: Colors.primaryDark,
      fontWeight: '500',
      fontSize: 15,
      textTransform: 'capitalize',
      textAlign: 'center',
    },
    filterChipTextSelected: {
      color: Colors.background,
      fontWeight: 'bold',
      fontSize: 15,
      textTransform: 'capitalize',
      textAlign: 'center',
    },
    filterModalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.3)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    filterModalContent: {
      backgroundColor: '#fff',
      borderRadius: 14,
      padding: 18,
      width: '90%',
      maxWidth: 350,
      maxHeight: '85%',
      shadowColor: Colors.primary,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.18,
      shadowRadius: 12,
      elevation: 8,
    },
    filterModalHeader: {
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 18,
      textAlign: 'center',
      color: Colors.primaryDark,
    },
    filterModalSectionTitle: {
      fontWeight: 'bold',
      fontSize: 16,
      marginBottom: 8,
      color: Colors.primaryDark,
      marginTop: 18,
    },
  }); 

  export default styles;