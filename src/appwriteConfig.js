import { Client, Databases, Account} from 'appwrite';

const client = new Client();

export const PROJECT_ID = '66235ea3e131358ff242'
export const DATABASE_ID = '66236018f0b6013a5a94'
export const COLLECTION_ID_MESSAGES = '66236023509ea9f4971b'

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66235ea3e131358ff242');

export const databases = new Databases(client);
export const account = new Account(client)

export default client;