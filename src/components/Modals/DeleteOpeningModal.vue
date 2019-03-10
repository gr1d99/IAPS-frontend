<template>
  <div class="modal fade" id="confirmDeleteModal" tabindex="-1" role="dialog" aria-labelledby="confirmDeleteModal" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="confirmDeleteModalLabe">Confirm Action</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          Do you really want to delete <strong>{{ title }}?</strong>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
          <button type="button" class="btn btn-primary" @click="deleteOpening" data-dismiss="modal">Yes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { OPENING_DELETED_SUCCESS } from '../../constants/messages';

export default {
  name: 'DeleteOpeningModal',
  props: ['title'],
  methods: {
    deleteOpening() {
      this.$store.dispatch('openings/deleteOpening', this.$route.params.id)
        .then(() => {
          this.$store.dispatch('addNotification', [OPENING_DELETED_SUCCESS]);
          this.$router.push('/');
        });
    },
  },
};
</script>

<style scoped>

</style>
