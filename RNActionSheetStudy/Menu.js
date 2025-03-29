// Using the provided hook
import { useActionSheet } from '@expo/react-native-action-sheet';
import { Button } from 'react-native';

export default function Menu() {
  const { showActionSheetWithOptions } = useActionSheet();

  const onPress = () => {
    const options = ['Delete', 'Save', 'Cancel'];
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = 2;

    showActionSheetWithOptions({
      options,
      cancelButtonIndex,
      destructiveButtonIndex
    }, (selectedIndex) => {
      switch (selectedIndex) {
        case 1:
          console.log("KAYDEDILDI")
          break;

        case destructiveButtonIndex:
          console.log("SILINDI")
          break;

        case cancelButtonIndex:
          console.log("IPTAL EDILDI")
      }});
  }

  return (
    <Button title="Menu" onPress={onPress}/>
  )
};