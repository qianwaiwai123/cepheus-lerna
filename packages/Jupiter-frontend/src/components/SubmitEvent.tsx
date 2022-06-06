import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { FontAwesome } from 'taro-icons';
import './SubmitEvent.css';

const SubmitEvent = () => {
  return (
    <View className="submitEventWrapper">
      <View className="submitEventContainer">
        <FontAwesome family='solid' name='check' color='#20B759' size={60} />
        <Text>已提交</Text>
        <View className="selectionsContainer">
          <View className="selection">
            <Text style={{color: '#2A82E4'}}>查看我发布的活动</Text>
            <FontAwesome family='solid' name='caret-right' color='#2A82E4' size={25} />
          </View>
          <View className="selection">
            <Text style={{color: '#E33C64'}}>查看我的活动群</Text>
            <FontAwesome family='solid' name='caret-right' color='#E33C64' size={25} />
          </View>
        </View>
      </View>
    </View>
  )
}

export default SubmitEvent;