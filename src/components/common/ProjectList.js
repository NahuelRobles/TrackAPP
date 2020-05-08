import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {styles} from '../../config/styleProject';
import {EditProject} from './EditProject';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImageRel from '../../../assets/reloj.png';

class ProyectList extends Component {
  state = {
    titleP: '',
    descriptionP: '',
    hrP: '',
    mmP: '',
  };
  Editopen(item) {
    this.setStateAsync(item);
    this.RBSheet.open();
  }

  async setStateAsync(item) {
    const time = item.Hours.split(':');
    await this.setState({
      titleP: item.Title,
      descriptionP: item.Description,
      hrP: time[0],
      mmP: time[1],
    });
  }

  render() {
    //HARCODE
    const Result = [
      {
        Title: 'Project_1',
        Description: 'This would be the description of the projects worked',
        Hours: '00:20',
      },
      {
        Title: 'Project_2',
        Description: 'This would be the description of the projects worked',
        Hours: '01:00',
      },
    ];
    return (
      <View>
        <SwipeListView
          data={Result}
          keyExtractor={(item, index) => index.toString()}
          renderItem={item => (
            <TouchableOpacity
              activeOpacity={1}
              onLongPress={() => this.Editopen(item.item)}>
              <View style={styles.containerFlatList}>
                <View style={styles.containerTextmDesc}>
                  <View>
                    <Text style={styles.textTStyle}>{item.item.Title}</Text>
                  </View>
                  <View>
                    <Text style={styles.textDStyle} numberOfLines={1}>
                      {item.item.Description}
                    </Text>
                  </View>
                </View>
                <View style={styles.containerHours}>
                  <Image source={ImageRel} style={styles.relojStyle} />
                  <Text style={styles.textHStyle}>{item.item.Hours}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          disableRightSwipe
          renderHiddenItem={item => (
            <View style={styles.containerFlatListHideActions}>
              <View style={styles.containerFlatListDelete}>
                <TouchableOpacity>
                  <Icon
                    name="trash"
                    size={30}
                    color="white"
                    style={styles.iconTrash}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.containerFlatListEdit}>
                <TouchableOpacity onPress={() => this.Editopen(item.item)}>
                  <Icon
                    name="edit"
                    size={30}
                    color="white"
                    style={styles.iconEdit}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
          leftOpenValue={75}
          rightOpenValue={-150}
        />
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={300}
          duration={250}
          customStyles={{
            container: {
              //justifyContent: "center",
              //alignItems: "center"
            },
          }}>
          <EditProject
            day={this.props.Day}
            month={this.props.Month}
            title={this.state.titleP}
            description={this.state.descriptionP}
            hs={this.state.hrP}
            mm={this.state.mmP}
            onPress={() => this.RBSheet.close()}
          />
        </RBSheet>
      </View>
    );
  }
}

export {ProyectList};
