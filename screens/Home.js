import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import COLORS from '../src/conts/colors';
import category from '../src/conts/category';
import categorysushi from '../src/conts/categorysushi';

const Home = ({navigation}) => {
  const [selectedTab, setSelectedTab] = React.useState(category[0].id);

  const Spicy = props => {
    const [spicy] = React.useState(props.item);

    if (!spicy) {
      return <Text> </Text>;
    }
    return (
      <View style={styles.spicyContainer}>
        <Image
          source={require('../src/assets/Fire.png')}
          style={styles.spicyImage}
        />
        <Text style={styles.spicyText}>spicy</Text>
      </View>
    );
  };
  const Hearth = props => {
    const [hearth, setHearth] = React.useState(props.item);
    const likeData = {hearth, setHearth};
    if (!hearth) {
      return (
        <TouchableOpacity
          onPress={() => {
            setHearth(!hearth);
          }}>
          <Image
            source={require('../src/assets/HeartFill.png')}
            style={styles.heart}
          />
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        onPress={() => {
          setHearth(!hearth);
        }}>
        <Image
          source={require('../src/assets/Heart.png')}
          style={styles.heart}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <View>
          <Text style={styles.topText}>Hi, Keira!</Text>
          <Text style={styles.topSubText}>Welcome back</Text>
        </View>
        <View style={styles.avatarContainer}>
          <Image
            source={require('../src/assets/Avatar.png')}
            style={styles.avatar}
          />
        </View>
      </View>
      <View style={styles.adscontainer}>
        <View>
          <Text style={styles.adsTitle}>
            Fee food delivery with 15% discount
          </Text>
          <Text style={styles.adsSubTitle}>Take now</Text>
        </View>
        <View>
          <Image
            source={require('../src/assets/sushiPlate.png')}
            style={styles.adsImage}
          />
        </View>
      </View>
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryTitle}>Menu Rolls and Sets</Text>
        <FlatList
          data={category}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                console.log(item.id);
                setSelectedTab(item.id);
              }}
              style={[
                styles.categoryContainers,
                selectedTab == item.id && styles.categorySelected,
              ]}>
              <Text
                style={[
                  styles.tabsText,
                  selectedTab == item.id && styles.categorySelectedText,
                ]}
                key={item.id}>
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.sushiContainer}>
        <FlatList
          contentContainerStyle={{paddingBottom: 20}}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            marginBottom: 30,
            marginHorizontal: 30,
            marginTop: 20,
          }}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={categorysushi}
          renderItem={({item}) => (
            <TouchableOpacity
              style={[styles.cardContainer]}
              onPress={() => {
                navigation.navigate('Detail', item);
              }}>
              <Image source={item.img} style={styles.cardImage} />
              <View style={styles.cartBottom}>
                <View style={styles.cardLeft}>
                  <Text style={styles.sushiTitle}>{item.name}</Text>
                  <View style={styles.spicy}>
                    <Text style={styles.sushiGr}>{item.gr + 'g.'} </Text>
                    <View>
                      <Spicy item={item.spicy} />
                    </View>
                  </View>
                  <Text style={styles.sushiPrice}>{'$' + item.price}</Text>
                </View>

                <Hearth item={item.like} />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topContainer: {
    marginHorizontal: 30,
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topText: {
    fontSize: 30,
    color: COLORS.black,
    fontWeight: 'bold',
  },
  topSubText: {
    fontSize: 16,
    color: COLORS.greySubTitle,
    fontWeight: 'Regular',
  },
  avatarContainer: {
    width: 45,
    height: 45,
    borderRadius: 45,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  adscontainer: {
    marginHorizontal: 30,
    marginTop: 30,
    marginBottom: 40,
    height: 133,
    padding: 20,
    borderRadius: 14,
    backgroundColor: COLORS.green,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  adsTitle: {
    color: COLORS.black,
    fontWeight: 'Medium',
    fontSize: 16,
    width: 140,
  },
  adsSubTitle: {
    color: COLORS.black,
    fontWeight: 'Medium',
    fontSize: 14,
    marginTop: 19,
    paddingLeft: 21,
  },
  adsImage: {
    width: 165,
    height: 165,
    marginHorizontal: '18%',
  },
  categoryContainer: {
    paddingLeft: 30,
    marginBottom: 20,
  },
  categoryTitle: {
    color: COLORS.black,
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 20,
  },
  categoryContainers: {
    height: 28,
    borderColor: COLORS.pinkSoft,
    borderWidth: 2,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  tabsText: {
    fontSize: 14,
    color: COLORS.greySoft,
    fontWeight: 'Medium',
    paddingHorizontal: 10,
  },
  categorySelected: {
    height: 28,
    borderColor: COLORS.pink,
    borderWidth: 2,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  categorySelectedText: {
    fontSize: 14,
    color: COLORS.greyCategory,
    fontWeight: 'Medium',
    paddingHorizontal: 10,
  },
  cardContainer: {
    width: 148,
    height: 177,
  },
  cardImage: {
    width: '100%',
  },
  cartBottom: {justifyContent: 'space-between', flexDirection: 'row'},
  heart: {
    marginTop: 10,
    width: 26,
    height: 26,
  },
  cardLeft: {
    width: 100,
  },
  sushiContainer: {
    flex: 1,
  },
  sushiTitle: {fontSize: 13, color: COLORS.black, fontWeight: 'bold'},
  sushiGr: {fontSize: 12, color: COLORS.greySubTitle},
  sushiPrice: {color: COLORS.black, fontWeight: 'bold', fontSize: 15},
  spicyImage: {width: 14, height: 14},
  spicyText: {color: COLORS.red, fontSize: 12},
  spicyContainer: {flexDirection: 'row'},
  spicy: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 5,
  },
});
