import React from 'react';
import {View, Text} from 'react-native';

import {extractDomainFromURL} from '../utils/formats';
import {colors} from '../theme/colors';

function DomainDisplay({url}: {url: string}) {
  const domain = extractDomainFromURL(url);

  return (
    <View>
      <Text style={{color: colors.skyblue}}>{domain}</Text>
    </View>
  );
}

export default DomainDisplay;
