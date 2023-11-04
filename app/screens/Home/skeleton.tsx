import React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const HomeSkeleton = () => {
  return (
    <View>
      <SkeletonPlaceholder
        borderRadius={4}
        backgroundColor="#d2d2d2"
        highlightColor="#f2f2f2"
        speed={1200}>
        <SkeletonPlaceholder.Item width="100%">
          {Array.from({length: 10}).map((_, index) => (
            <SkeletonPlaceholder.Item
              key={index}
              width="auto"
              height={54}
              borderRadius={8}
              marginBottom={4}
            />
          ))}
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </View>
  );
};

export default HomeSkeleton;
