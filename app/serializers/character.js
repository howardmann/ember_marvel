import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse (store, primaryModelClass, payload, id, requestType){
    return {
      data: payload.data.results.map(function(obj){
        return {
          attributes: {
            name: obj.name,
            description: obj.description,
            thumbnail: `${obj.thumbnail.path}.${obj.thumbnail.extension}`
          },
          id: obj.id,
          type: 'character'
        }
      })
    }
  }
});
