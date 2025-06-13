import type { Schema, Struct } from '@strapi/strapi';

export interface PrizePrize extends Struct.ComponentSchema {
  collectionName: 'components_prize_prizes';
  info: {
    displayName: 'Prize';
    icon: 'gift';
  };
  attributes: {
    Name: Schema.Attribute.String;
    Quantity: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'prize.prize': PrizePrize;
    }
  }
}
