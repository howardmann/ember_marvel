import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://gateway.marvel.com:80',
  namespace: 'v1/public',
  publicApi: '5d6973b55637eb94d44b62e6898416fd',
  privateApi: '406dd8766a5fab8c4542e9575a137916e17cff20',
  timeStamp: '1',
  hash: '864f8ff0746be012346ff15cc43c5c75',
  urlForQuery(query){
    let url = `${this.urlPrefix()}/characters?nameStartsWith=${query.name}&ts=${this.timeStamp}&apikey=${this.publicApi}&hash=${this.hash}`;
    delete query.name;
    return url;
  }
});
