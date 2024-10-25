import type { Struct, Schema } from '@strapi/strapi';

export interface ComplexFieldsGeo extends Struct.ComponentSchema {
  collectionName: 'components_complex_fields_geos';
  info: {
    displayName: 'Geo';
    icon: 'pinMap';
    description: '';
  };
  attributes: {
    lat: Schema.Attribute.String & Schema.Attribute.Required;
    lng: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComplexFieldsCompany extends Struct.ComponentSchema {
  collectionName: 'components_complex_fields_companies';
  info: {
    displayName: 'Company';
    icon: 'slideshow';
  };
  attributes: {
    name: Schema.Attribute.String;
    catchPhrase: Schema.Attribute.String & Schema.Attribute.Required;
    bs: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComplexFieldsAddress extends Struct.ComponentSchema {
  collectionName: 'components_complex_fields_addresses';
  info: {
    displayName: 'Address';
    icon: 'house';
  };
  attributes: {
    street: Schema.Attribute.String & Schema.Attribute.Required;
    suite: Schema.Attribute.String & Schema.Attribute.Required;
    city: Schema.Attribute.String & Schema.Attribute.Required;
    zipcode: Schema.Attribute.String & Schema.Attribute.Required;
    geo: Schema.Attribute.Component<'complex-fields.geo', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'complex-fields.geo': ComplexFieldsGeo;
      'complex-fields.company': ComplexFieldsCompany;
      'complex-fields.address': ComplexFieldsAddress;
    }
  }
}
