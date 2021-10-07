import React, { Component } from 'react';
import { Animated, Dimensions, Image, Platform, Pressable, StyleSheet, ScrollView, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const STATUS_BAR_HEIGHT = (Platform.OS === 'ios' ? 40 : StatusBar.currentHeight);
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_PADDING = SCREEN_WIDTH > 375 ? 125 : (SCREEN_WIDTH > 250 ? SCREEN_WIDTH - 250 : 60);

export default class Favorites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavigationMenuOn: false,
      user: {
        name: "Yunus Gürlek",
        email: "ygurlek22@my.uaa.k12.tr",
        emailPrefix: "ygurlek22",
        profileImage: "../../assets/default/profile_image.png"
      },
      announcements: [
        {
          _id: "1",
          title: "Yeni akademik takvim açıklandı",
          text: "Üsküdar Amerikan Lisesi 2021-2022 Eğitim Yılı akademik takvimini görmek için tıklayın.",
          is_favorite: true,
          image: "https://styles.redditmedia.com/t5_3pl96/styles/communityIcon_8hd10savu5v41.jpg?width=256&format=pjpg&s=202a803566c0f046e437c04c2c70e96bf4136362"
        },
        {
          _id: "2",
          title: "Codefest’22 Ekip Başvuruları Açıldı",
          text: "Başvuru formuna gitmek için tıklayın.",
          is_favorite: true,
          image: "https://codefesttr.org/res/images/dashboard_image_small.png"
        }
      ]
    };
  }

  render() {
    return (
      <View style={styles.all_wrapper}>
        <Image source={require('../../assets/top_images/favorites.png')} style={styles.page_top_image} ></Image>
        <View style={styles.page_top_wrapper} >
          <View style={styles.page_top_text_wrapper} >
            <Text style={styles.page_top_title} >FAVORITES</Text>
            <Text style={styles.page_top_text} >Keep all your favorite announcements to reach them.</Text>
          </View>
          <TouchableOpacity style={styles.page_top_profile_wrapper} >
            <View style={styles.page_top_profile_text_wrapper} >
              <Text style={styles.page_top_profile_name} >{this.state.user.name}</Text>
              <Text style={styles.page_top_profile_email} >{this.state.user.emailPrefix}</Text>
            </View>
            <Image source={require("../../assets/default/profile_image.png")} style={styles.page_top_profile_image} ></Image>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.content_wrapper} >
          { this.state.announcements.map((announcement, key) => {
            return (
              <TouchableOpacity key={key} style={styles.each_announcement_wrapper} onPress={() => {this.props.navigation.push('Details', { id: announcement.id })}} >
                <Image source={{uri: announcement.image}} style={styles.each_announcement_image} ></Image>
                <View style={styles.each_announcement_inner_wrapper} >
                  <Text style={styles.each_announcement_title} numberOfLines={2} lineBreakMode="tail" >{announcement.title}</Text>
                  <Text style={styles.each_announcement_text} numberOfLines={1} lineBreakMode="tail" >{announcement.text}</Text>
                  <TouchableOpacity onPress={() => {this.setState({
                    announcements: this.state.announcements.filter(each => each._id != announcement._id)
                  })}} >
                    <Image source={require('../../assets/favorite_selected_button.png')} style={styles.each_announcement_favorite_button} ></Image>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          }) }
        </ScrollView>
        <View style={styles.bottom_wrapper} >
          <Image source={require('../../assets/logo.png')} style={styles.bottom_logo} ></Image>
        </View>
        <Pressable onPress={() => {this.setState({ isNavigationMenuOn: !this.state.isNavigationMenuOn })}} style={styles.navigation_button} >
          { !this.state.isNavigationMenuOn ?
            <Image source={require('../../assets/navigationButton.png')} style={[styles.navigation_button_image, {marginTop: -5}]} ></Image>
            :
            <Image source={require('../../assets/navigationButtonClosed.png')} style={[styles.navigation_button_image, {marginTop: 5}]} ></Image>
          }
        </Pressable>
        <View style={[styles.navigation_menu, {display: this.state.isNavigationMenuOn ? "flex" : "none"}]} >
          <View style={styles.navigation_menu_column_one} >
            <TouchableOpacity onPress={() => {this.props.navigation.push('Uniform')}} >
              <Image source={require('../../assets/button_icons/uniform.png')} style={[styles.navigation_menu_each_button_image, {marginLeft: 20}]} ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.navigation_menu_column_two} >
            <TouchableOpacity onPress={() => {this.props.navigation.push('Menu')}}>
              <Image source={require('../../assets/button_icons/menu.png')} style={styles.navigation_menu_each_button_image} ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.navigation_menu_column_three} >
            <TouchableOpacity onPress={() => {this.setState({ isNavigationMenuOn: false })}}>
              <Image source={require('../../assets/clicked_button_icons/favorites.png')} style={[styles.navigation_menu_each_button_image, {marginBottom: 50}]} ></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {this.props.navigation.push('Index')}}>
              <Image source={require('../../assets/button_icons/home.png')} style={styles.navigation_menu_each_button_image} ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.navigation_menu_column_two} >
            <TouchableOpacity onPress={() => {this.props.navigation.push('Sport')}}>
              <Image source={require('../../assets/button_icons/sport.png')} style={styles.navigation_menu_each_button_image} ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.navigation_menu_column_one} >
            <TouchableOpacity onPress={() => {this.props.navigation.push('Bus')}}>
              <Image source={require('../../assets/button_icons/bus.png')} style={[styles.navigation_menu_each_button_image, , {marginRight: 20}]} ></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  all_wrapper: {
    flex: 1, paddingTop: STATUS_BAR_HEIGHT, backgroundColor: "rgb(12, 12, 12)"
  },
  page_top_image: {
    marginTop: -1 * STATUS_BAR_HEIGHT,
    height: STATUS_BAR_HEIGHT + 75,
    width: "100%",
    resizeMode: "cover"
  },
  page_top_wrapper: {
    marginTop: -75,
    height: 75,
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  page_top_text_wrapper: {
    width: 230,
    height: "100%",
    justifyContent: "center"
  },
  page_top_title: {
    fontWeight: "700",
    fontSize: 16,
    color: "rgb(254, 254, 254)",
    marginBottom: 5
  },
  page_top_text: {
    fontWeight: "500",
    fontSize: 14,
    color: "rgb(254, 254, 254)"
  },
  page_top_profile_wrapper: {
    flexDirection: "row",
    alignItems: "center"
  },
  page_top_profile_text_wrapper: {
    marginRight: 7,
    alignItems: "flex-end"
  },
  page_top_profile_name: {
    fontWeight: "500",
    fontSize: 15,
    color: "rgb(254, 254, 254)"
  },
  page_top_profile_email: {
    fontWeight: "500",
    fontSize: 14,
    color: "rgba(240, 122, 57, 1)"
  },
  content_wrapper: {
    flex: 1, backgroundColor: "rgb(14, 14, 14)",
    paddingLeft: 20, paddingRight: 20, marginTop: 20, paddingBottom: 75
  },
  each_announcement_wrapper: {
    width: "100%", height: 130,
    marginBottom: 20,
    backgroundColor: "rgb(12, 12, 12)", borderRadius: 10,
    flexDirection: "row"
  },
  each_announcement_image: {
    height: 130, width: 130, resizeMode: "cover",
    borderTopLeftRadius: 10, borderBottomLeftRadius: 10
  },
  each_announcement_inner_wrapper: {
    padding: 10, width: SCREEN_WIDTH - 40 - 130
  },
  each_announcement_title: {
    fontWeight: "700",
    fontSize: 18,
    color: "rgb(254, 254, 254)",
    width: "100%",
    marginBottom: 7
  },
  each_announcement_text: {
    fontWeight: "300",
    fontSize: 14,
    color: "rgb(254, 254, 254)",
    width: "100%", marginBottom: "auto"
  },
  each_announcement_favorite_button: {
    width: 22, height: 20, resizeMode: "cover",
    alignSelf: "flex-end"
  },
  bottom_wrapper: {
    zIndex: 3,
    height: 75,
    width: "100%",
    flexDirection: "row",
    paddingRight: 20,
    justifyContent: "flex-end",
    alignItems: "center",
    borderTopColor: "rgba(51, 51, 102, 1)",
    borderTopWidth: 2,
    backgroundColor: "rgb(12, 12, 12)"
  },
  bottom_logo: {
    height: 15,
    width: 54,
    resizeMode: "contain"
  },
  navigation_button: {
    zIndex: 4,
    position: "absolute",
    alignSelf: "center",
    bottom: 45,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "rgba(51, 51, 102, 1)",
    justifyContent: "center",
    alignItems: "center"
  },
  navigation_button_image: {
    width: 20,
    height: 27
  },
  navigation_menu: {
    zIndex: 2,
    position: "absolute",
    backgroundColor: "rgb(254, 254, 254)",
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH,
    borderRadius: SCREEN_WIDTH / 2,
    bottom: -1 * (SCREEN_WIDTH / 2 - 75),
    flexDirection: "row",
    paddingBottom: (SCREEN_WIDTH / 2)
  },
  navigation_menu_column_one: {
    marginTop: "auto",
    width: SCREEN_WIDTH / 5,
    height: SCREEN_WIDTH / 6,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  navigation_menu_column_two: {
    marginTop: "auto",
    width: SCREEN_WIDTH / 5,
    height: SCREEN_WIDTH / 3,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  navigation_menu_column_three: {
    marginTop: "auto",
    width: SCREEN_WIDTH / 5,
    height: SCREEN_WIDTH / 2 - 30,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  navigation_menu_each_button_image: {
    width: 45,
    resizeMode: "contain"
  }
});
 