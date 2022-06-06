import React from 'react';
import { View, Text, Input, Picker, Radio, Textarea, Button, RadioGroup } from '@tarojs/components';
import './index.css';
import { FontAwesome } from 'taro-icons';
import Taro from '@tarojs/taro';

const greyText = {
  color: '#A6A6A6',
  fontSize: '13px'
}

const blueText = {
  color: '#2A82E4',
  fontSize: '13px',
  marginBottom: '1rem'
}

const tempcategories = ['露营', '运动', '交友', '集市']

const CreateEvent = () => {
  const [title, setTitle] = React.useState('');
  const [date, setDate] = React.useState('');
  const [categories, setCategries] = React.useState(tempcategories);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(-1);
  const [isAddTagOpen, setIsAddTagOpen] = React.useState(false);
  const [tags, setTags] = React.useState([]);
  const [tag, setTag] = React.useState('');

  const getCurrentDate = () => {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    const currentDate = yyyy + '-' + mm + '-' + dd;
    setDate(currentDate);
  }

  React.useEffect(() => {
    getCurrentDate();
  }, [])

  const uploadImageHandler = () => {
    Taro.chooseImage({
      sourceType: ['album', 'camera']
    })
      .then(res => console.log(res))
  }

  const backHandler = () => {
    Taro.navigateBack();
  }

  const addTagHandler = () => {
    setTags([...tags, tag]);
    setIsAddTagOpen(false);
  }
  

  return (
    <View className='createWrapper'>
      <View className='formContainer'>
        <View className='item'>
          <Text>活动名称</Text>
          <Input
            type='text'
            value={title}
            className='textInput'
            placeholder='输入活动名称'
            onInput={(e) => setTitle(e.detail.value)}
          />
        </View>
        <Picker
          mode='date'
          value={date}
          onChange={(e) => setDate(e.detail.value)}
        >
          <View className='item'>
            <Text>时间<Text style={greyText}> (不选则默认即时发布)</Text></Text>
            <View className='selections'>
              <Text>{date}</Text>
              <FontAwesome family='solid' name='angle-right' color='#c4c4c4' size={20} />
            </View>
          </View>
        </Picker>
        <View className='item'>
          <Text>地点</Text>
          <FontAwesome family='solid' name='angle-right' color='#c4c4c4' size={20} />
        </View>
        <RadioGroup className='option'>
          <Radio color='#2A82E4' >官方发起</Radio>
          <Radio color='#2A82E4' >个人发起</Radio>
        </RadioGroup>
        <Picker
          mode='selector'
          value={selectedCategoryIndex}
          range={categories}
          onChange={(e) => setSelectedCategoryIndex(e.detail.value as number)}
        >
          <View className='item'>
            <Text>活动类型</Text>
            <View className='selections'>
              {selectedCategoryIndex !== -1 && (<Text>{categories[selectedCategoryIndex]}</Text>)}
              <FontAwesome family='solid' name='angle-right' color='#c4c4c4' size={20} />
            </View>
          </View>
        </Picker>
        <View className='item'>
          <Text>上传照片</Text>
        </View>
        <View className='uploadImage' onClick={uploadImageHandler}>
          <FontAwesome family='solid' name='plus' color='#c4c4c4' size={20} />
          <Text style={greyText}>点击上传图片</Text>
        </View>
        <View className='tagsContainer'>
          {tags.length > 0 && (tags.map(item => {
            return (<View className='addTag'>{item}</View>)
          }))}
          <Text style={blueText} onClick={() => setIsAddTagOpen(true)}>添加活动标签</Text>
        </View>
      </View>
      <View className='formContainer'>
        <View className='item'>
            <Text>填写详情<Text style={greyText}> (活动发布后自动生成群聊)</Text></Text>
        </View>
        <View className='uploadImage' onClick={uploadImageHandler}>
          <FontAwesome family='solid' name='plus' color='#c4c4c4' size={20} />
          <Text style={greyText}>点击上传图片</Text>
        </View>
        <View className='item'>
          <Textarea
            placeholder='对活动进行一些描述吧'
            autoHeight={true}/>
        </View>
      </View>
      <View className='formContainer'>
        <View className='item'>
          <Text>奖品奖励<Text style={greyText}> (选填)</Text></Text>
          <FontAwesome family='solid' name='angle-right' color='#c4c4c4' size={20} />
        </View>
        <View className='item'>
          <Text>优惠券</Text>
        </View>
        <View className='item'>
          <Text>实物奖品</Text>
          <Input
            type='text'
            className='textInput'
            onInput={(e) => console.log(e)}
          />
        </View>
      </View>
      <Text className='saveDraft'>保存草稿</Text>
      <View className='buttons'>
        <Button
          className='exitButton'
          onClick={backHandler}
        >
          退出
        </Button>
        <Button className='submitButton'>提交</Button>
      </View>
      {isAddTagOpen && (
        <View className='addTagContainer'>
          <View className='greyLine' />
          <Text style={greyText}>最多添加5个标签</Text>
          <View className='addTagInputBar'>
            <Input
              className='searchBar'
              type='text'
              placeholder='自定义标签最多5个字'
              placeholderStyle='color: white' 
              onInput={(e) => setTag(e.detail.value)}
            />
            <View
              className='telegramIcon'
              onClick={addTagHandler}
            >
              <FontAwesome
                family='brands'
                name='telegram'
                size={40}
                color='#5680FA'
              />
            </View>
          </View>
        </View>
      )}
      
    </View>
  )
}

export default CreateEvent;