import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import COLORS from '../src/conts/colors';
import categorysushi from '../src/conts/categorysushi';

const Detail = ({navigation, route}) => {
  const [sushiCount, setSushiCount] = React.useState(1);
  const [discount, setDiscount] = React.useState('true');
  const sushi = route.params;
  console.log(sushi);
  const Discount = props => {
    const [discount] = React.useState(props.item);
    console.log(discount);
    if (!discount) {
      return (
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: COLORS.black,
            textDecorationLine: 'line-through',
          }}>
          Take now
        </Text>
      );
    }
    return (
      <Text
        style={{
          fontSize: 14,
          fontWeight: 'bold',
          color: COLORS.black,
        }}>
        Take now
      </Text>
    );
  };
  const Price = props => {
    if (!discount) {
      return (
        <Text style={{fontSize: 25, fontWeight: 'bold', color: COLORS.black}}>
          $
          {props.price * props.sushiCount -
            props.price * props.sushiCount * 0.15}
        </Text>
      );
    }
    return (
      <Text style={{fontSize: 25, fontWeight: 'bold', color: COLORS.black}}>
        {'$' + props.price * props.sushiCount}
      </Text>
    );
  };

  const Hearth = props => {
    const [hearth, setHearth] = React.useState(props.item);
    if (!hearth) {
      return (
        <TouchableOpacity
          onPress={() => {
            setHearth(!hearth);
          }}>
          <Image source={require('../src/assets/HeartFill2.png')} />
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        onPress={() => {
          setHearth(!hearth);
        }}>
        <Image
          source={require('../src/assets/HeartSolid.png')}
          style={styles.hearthImage}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.navContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.back}>
            <Image
              source={require('../src/assets/Back.png')}
              style={styles.backImage}
            />
          </TouchableOpacity>
          <View style={styles.topText}>
            <Text style={styles.topTextName}>Set Details</Text>
          </View>
          <View style={styles.hearth}>
            <Hearth item={sushi.like} />
          </View>
        </View>
        <Text style={styles.sushiName}>{sushi.name}</Text>
      </View>
      <Image
        source={require('../src/assets/sushiRoll.png')}
        style={styles.sellimage}
      />
      <View style={styles.bottomContainer}>
        <View style={styles.priceContainer}>
          <View>
            <Price
              price={sushi.price}
              sushiCount={sushiCount}
              discount={discount}
            />
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 12, color: COLORS.greySubTitle}}>
                {sushi.gr + 'g.'}
              </Text>
              <Text style={{fontSize: 12, color: COLORS.greySubTitle}}>
                {' x' + sushiCount}
              </Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => {
                setSushiCount(sushiCount - 1);
              }}
              style={{
                width: 50,
                height: 50,
                borderRadius: 12,
                backgroundColor: COLORS.green,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../src/assets/Minus.png')}
                style={{width: 32, height: 32}}
              />
            </TouchableOpacity>
            <Text
              style={{fontSize: 25, color: COLORS.black, marginHorizontal: 20}}>
              {sushiCount}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setSushiCount(sushiCount + 1);
              }}
              style={{
                width: 50,
                height: 50,
                borderRadius: 12,
                backgroundColor: COLORS.green,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../src/assets/Plus.png')}
                style={{width: 32, height: 32}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginLeft: 30, marginTop: 14}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: COLORS.black,
              marginBottom: 5,
            }}>
            Set Structure
          </Text>
          <FlatList
            data={categorysushi}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  console.log(item.id);
                }}>
                <View style={{width: 85, height: 84, marginRight: 12}}>
                  <Image
                    source={item.img}
                    style={{width: '100%', height: 57}}
                  />
                  <Text style={{fontSize: 10, width: 72, color: COLORS.black}}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <View
          style={{
            marginVertical: 21,
            marginHorizontal: 30,
            backgroundColor: COLORS.background,
            height: 54,
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 15,
            paddingRight: 10,
          }}>
          <Text
            style={{
              fontSize: 12,
              color: COLORS.black,
              width: 106,
              fontWeight: 'bold',
            }}>
            Fee food delivery with 15% discount
          </Text>
          <TouchableOpacity
            onPress={() => {
              setDiscount(!discount);
              console.log(discount);
            }}
            style={{
              backgroundColor: COLORS.white,
              justifyContent: 'center',
              alignItems: 'center',
              width: 106,
              borderRadius: 8,
              height: 36,
            }}>
            <Discount item={discount} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: COLORS.green,
            height: 60,
            borderRadius: 12,
            marginHorizontal: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.black}}>
            Add to Cart
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.background},
  topContainer: {
    height: 160,
    backgroundColor: COLORS.white,
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backImage: {
    width: 8,
    height: 13,
  },
  back: {
    width: 45,
    height: 45,
    borderRadius: 45,
    borderColor: COLORS.black,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hearthImage: {width: 26, height: 26},
  hearth: {
    width: 45,
    height: 45,
    borderRadius: 45,
    borderColor: COLORS.black,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topTextName: {
    fontSize: 16,
    color: COLORS.greySubTitle,
  },
  sushiName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.black,
    marginTop: 20,
    marginLeft: '19%',
  },
  sellimage: {
    flex: 1,
    width: '100%',
  },
  bottomContainer: {
    width: '100%',
    height: 404,
    backgroundColor: COLORS.white,
    borderRadius: 30,
  },
  priceContainer: {
    margin: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
