import type { Schema, Attribute } from '@strapi/strapi';

export interface AsdAsd extends Schema.Component {
  collectionName: 'components_asd_asds';
  info: {
    displayName: 'asd';
  };
  attributes: {};
}

export interface SadPhoto extends Schema.Component {
  collectionName: 'components_sad_photos';
  info: {
    displayName: 'photo';
    icon: 'bold';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'asd.asd': AsdAsd;
      'sad.photo': SadPhoto;
    }
  }
}
