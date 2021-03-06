import React from 'react';
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize';

import {I18nManager, SafeAreaView, StyleSheet, Text} from 'react-native';

const translationGetters = {
  // lazy requires (metro bundler does not support symlinks)
  en: () => require('../../translations/en.json'),
  es: () => require('../../translations/es.json'),
};

const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

const setI18nConfig = () => {
  // fallback if no available language fits
  const fallback = {languageTag: 'en', isRTL: false};

  const {languageTag, isRTL} =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;

  // clear translation cache
  translate.cache.clear();
  // update layout direction
  I18nManager.forceRTL(isRTL);
  // set i18n-js config
  i18n.translations = {[languageTag]: translationGetters[languageTag]()};
  i18n.locale = languageTag;
};

const TraslateText = Title => {
  setI18nConfig(); // set initial config
  Traduction = translate(`${Title}`);
  return Traduction;
};

export {TraslateText};
