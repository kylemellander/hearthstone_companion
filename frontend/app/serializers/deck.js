import { ActiveModelSerializer } from 'active-model-adapter';

export default ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    cardDecks: { embedded: 'always' },
    cards: { embedded: 'always' }
  }
});
