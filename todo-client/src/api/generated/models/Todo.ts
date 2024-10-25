/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ComplexFieldsAddressComponent } from "./ComplexFieldsAddressComponent";
import type { ComplexFieldsCompanyComponent } from "./ComplexFieldsCompanyComponent";
export type Todo = {
  id?: number;
  documentId?: string;
  title: string;
  completed: boolean;
  user?: {
    id?: number;
    documentId?: string;
    username?: string;
    email?: string;
    provider?: string;
    resetPasswordToken?: string;
    confirmationToken?: string;
    confirmed?: boolean;
    blocked?: boolean;
    role?: {
      id?: number;
      documentId?: string;
      name?: string;
      description?: string;
      type?: string;
      permissions?: Array<{
        id?: number;
        documentId?: string;
        action?: string;
        role?: {
          id?: number;
          documentId?: string;
        };
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
        createdBy?: {
          id?: number;
          documentId?: string;
          firstname?: string;
          lastname?: string;
          username?: string;
          email?: string;
          resetPasswordToken?: string;
          registrationToken?: string;
          isActive?: boolean;
          roles?: Array<{
            id?: number;
            documentId?: string;
            name?: string;
            code?: string;
            description?: string;
            users?: Array<{
              id?: number;
              documentId?: string;
            }>;
            permissions?: Array<{
              id?: number;
              documentId?: string;
              action?: string;
              actionParameters?: any;
              subject?: string;
              properties?: any;
              conditions?: any;
              role?: {
                id?: number;
                documentId?: string;
              };
              createdAt?: string;
              updatedAt?: string;
              publishedAt?: string;
              createdBy?: {
                id?: number;
                documentId?: string;
              };
              updatedBy?: {
                id?: number;
                documentId?: string;
              };
              locale?: string;
              localizations?: Array<{
                id?: number;
                documentId?: string;
              }>;
            }>;
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: {
              id?: number;
              documentId?: string;
            };
            updatedBy?: {
              id?: number;
              documentId?: string;
            };
            locale?: string;
            localizations?: Array<{
              id?: number;
              documentId?: string;
            }>;
          }>;
          blocked?: boolean;
          preferedLanguage?: string;
          createdAt?: string;
          updatedAt?: string;
          publishedAt?: string;
          createdBy?: {
            id?: number;
            documentId?: string;
          };
          updatedBy?: {
            id?: number;
            documentId?: string;
          };
          locale?: string;
          localizations?: Array<{
            id?: number;
            documentId?: string;
          }>;
        };
        updatedBy?: {
          id?: number;
          documentId?: string;
        };
        locale?: string;
        localizations?: Array<{
          id?: number;
          documentId?: string;
        }>;
      }>;
      users?: Array<{
        id?: number;
        documentId?: string;
      }>;
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: Array<{
        id?: number;
        documentId?: string;
      }>;
    };
    company?: Array<ComplexFieldsCompanyComponent>;
    address?: Array<ComplexFieldsAddressComponent>;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: Array<{
      id?: number;
      documentId?: string;
    }>;
  };
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  createdBy?: {
    id?: number;
    documentId?: string;
  };
  updatedBy?: {
    id?: number;
    documentId?: string;
  };
  locale?: string;
  localizations?: Array<{
    id?: number;
    documentId?: string;
    title?: string;
    completed?: boolean;
    user?: {
      id?: number;
      documentId?: string;
    };
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: Array<{
      id?: number;
      documentId?: string;
    }>;
  }>;
};
