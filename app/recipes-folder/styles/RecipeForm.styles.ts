import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';
import { commonStyles } from '../../../constants/Styles';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
    padding: 20,
    overflow: 'visible',
  },
  contentContainer: {
    paddingBottom: 40,
    overflow: 'visible',
  },
  pageTitle: {
    ...commonStyles.title,
    marginBottom: 20,
  },
  section: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1.5,
    borderColor: Colors.border,
    shadowColor: Colors.border,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    overflow: 'visible',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.primaryDark,
    marginBottom: 8,
  },
  input: {
    backgroundColor: Colors.surface,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: Colors.text,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  pickerContainer: {
    backgroundColor: Colors.surface,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.border,
    justifyContent: 'center',
  },
  picker: {
    color: Colors.text,
    backgroundColor: 'transparent',
  },
  imageScroller: {
    flexGrow: 0,
    marginBottom: 10,
  },
  imageOption: {
    marginRight: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: Colors.surface,
    padding: 4,
    backgroundColor: Colors.card,
  },
  selectedImageOption: {
    borderWidth: 3,
    borderColor: Colors.owned,
    backgroundColor: Colors.card,
  },
  recipeImage: {
    width: 80,
    height: 80,
    borderRadius: 6,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  addButtonText: {
    color: Colors.primary,
    marginLeft: 4,
    fontSize: 16,
    fontWeight: '600',
  },
  ingredientContainer: {
    backgroundColor: Colors.surface,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    overflow: 'visible',
  },
  ingredientRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ingredientInputContainer: {
    flex: 1,
    position: 'relative',
  },
  ingredientNameInput: {
    backgroundColor: Colors.card,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: Colors.text,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    overflow: 'visible',
  },
  quantityInput: {
    flex: 1,
    backgroundColor: Colors.card,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: Colors.text,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  unitPickerContainer: {
    flex: 0.7,
    backgroundColor: Colors.card,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.border,
    justifyContent: 'center',
    paddingHorizontal: 4,
    minHeight: 48,
    overflow: 'visible',
    zIndex: 1000,
    position: 'relative',
  },
  unitPicker: {
    color: Colors.text,
    backgroundColor: 'transparent',
    fontSize: 16,
    marginTop: -8,
    marginBottom: -8,
    position: 'relative',
    zIndex: 1001,
  },
  removeButton: {
    padding: 8,
  },
  suggestionsList: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: Colors.card,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.border,
    maxHeight: 150,
    zIndex: 1000,
  },
  suggestionItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  suggestionText: {
    fontSize: 16,
    color: Colors.text,
  },
  instructionContainer: {
    backgroundColor: Colors.surface,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  instructionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  stepNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.primaryDark,
  },
  instructionInput: {
    backgroundColor: Colors.card,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: Colors.text,
    borderWidth: 1,
    borderColor: Colors.border,
    minHeight: 80,
    textAlignVertical: 'top',
  },
  submitButton: {
    ...commonStyles.primaryButton,
    marginVertical: 20,
    marginTop: 0,
  },
  submitButtonDisabled: {
    opacity: 0.7,
  },
  submitButtonText: {
    ...commonStyles.primaryButtonText,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  uploadedImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    margin: 8,
  },
  selectedImage: {
    borderColor: Colors.primary,
    borderWidth: 2,
  },
  imageOptionImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  uploadButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 8,
  },
  uploadButtonText: {
    color: Colors.background,
    fontWeight: 'bold',
    fontSize: 16,
  },
  sectionDescription: {
    fontSize: 14,
    color: Colors.text,
    marginBottom: 12,
    lineHeight: 20,
  },
});

export default styles;