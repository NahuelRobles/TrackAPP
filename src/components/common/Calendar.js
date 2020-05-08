import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import {TraslateText} from './LangeManager';
import {colorsCalanders} from '../../config/styleConfig';

import LinearGradient from 'react-native-linear-gradient';

class Calendar extends Component {
  date(dates) {
    this.props.callback(dates);
  }

  render() {
    const locale = {
      name: TraslateText('lenguage'),
      config: {
        months: `${TraslateText('months')}`.split('_'),
        monthsShort: `${TraslateText('monthsShort')}`.split('_'),
        weekdays: `${TraslateText('weekdays')}`.split('_'),
        weekdaysShort: `${TraslateText('weekdaysShort')}`.split('_'),
        weekdaysMin: `${TraslateText('weekdaysMin')}`.split('_'),
      },
    };
    return (
      <SafeAreaView>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 2}}
          colors={[
            colorsCalanders.colorOneGradientCalendar,
            colorsCalanders.colorTwoGradientCalendar,
            colorsCalanders.colorTriGradientCalendar,
          ]}
          style={styles.linearGradientStyles}>
          <CalendarStrip
            onDateSelected={dates => this.date(dates.format('MM-DD-YYYY'))}
            locale={locale}
            daySelectionAnimation={styles.daySelectionAnimation}
            style={styles.calanderStyle}
            calendarHeaderStyle={styles.calendarHeaderStyle}
            calendarColor="transparent"
            dateNameStyle={styles.dateNameStyle}
            iconContainer={styles.iconContainer}
            dateNumberStyle={styles.dateNumberStyle}
            weekendDateNameStyl={styles.weekendDateNameStyle}
          />
        </LinearGradient>
      </SafeAreaView>
    );
  }
}
const styles = {
  linearGradientStyles: {
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  calanderStyle: {
    height: 200,
    paddingTop: 20,
    paddingBottom: 10,
    borderColor: colorsCalanders.borderColorCalander,
    borderWidth: 2,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  calendarHeaderStyle: {
    color: colorsCalanders.calendarHeaderStyle,
  },
  dateNameStyle: {
    color: colorsCalanders.dateNameStyle,
  },
  dateNumberStyle: {
    fontSize: 25,
    color: colorsCalanders.dateNumberStyle,
  },
  weekendDateNameStyle: {
    fontSize: 10,
  },
  iconContainer: {
    flex: 0.1,
  },
  daySelectionAnimation: {
    type: 'background',
    duration: 300,
    highlightColor: 'white',
  },
};

export {Calendar};
