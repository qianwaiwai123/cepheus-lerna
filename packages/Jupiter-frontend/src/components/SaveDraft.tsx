import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { FontAwesome } from 'taro-icons';
import './SaveDraft.css'

const SaveDraft = () => {
  return (
    <View className="saveDraftWrapper">
      <View className="saveDraftContainer">
        <FontAwesome family='solid' name='sd-card' color='#C4C4C4' size={70} />
        <Text>草稿已保存</Text>
      </View>
    </View>
  )
}

export default SaveDraft;