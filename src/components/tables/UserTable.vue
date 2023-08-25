<script setup>
import { ref, onMounted } from "vue";
import { UserStore, UpdateUserStore } from "../stores/UsersStore";
import Swal from "sweetalert2";
import SpinnerHookVue from "../views/SpinnerHook.vue";

const data = ref([]);
const dataUpdate = ref([]);
const loading = ref(true);

const Delete = (id) => {
  Swal.fire({
    title: "Êtes-vous sûr?",
    text: "Cette action est irréversible!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Oui, supprimer!",
    cancelButtonText: "Annuler",
  }).then((result) => {
    if (result.isConfirmed) {
      // Logique à exécuter si l'utilisateur confirme
      Swal.fire("Supprimé!", "Votre élément a été supprimé.", "success");
    } else {
      alert(id);
    }
  });
};

const updateFunction = async (id) => {
  try {
    dataUpdate.value = await UpdateUserStore(id);
    loading.value = false;
  } catch (error) {
    alert(error);
  }
};

onMounted(async () => {
  try {
    data.value = await UserStore();
    loading.value = false;
  } catch (error) {
    alert(error);
  }
});
</script>
<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="table-responsive">
        <table id="example5" class="table display mb-4 dataTablesCard fs-14">
          <thead>
            <tr>
              <th>
                <div class="checkbox mr-0 align-self-center">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="checkAll"
                      required=""
                    />
                    <label class="custom-control-label" for="checkAll"></label>
                  </div>
                </div>
              </th>
              <th>Fname</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="dt in data" :key="dt.id">
              <td>
                <div class="checkbox mr-0 align-self-center">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="customCheckBox2"
                      required=""
                    />
                    <label
                      class="custom-control-label"
                      for="customCheckBox2"
                    ></label>
                  </div>
                </div>
              </td>
              <td>{{ dt.fname }}</td>
              <td>{{ dt.name }}</td>
              <td>{{ dt.phone }}</td>
              <td>{{ dt.email }}</td>
              <td class="font-w500">
                <button
                  type="button"
                  class="btn btn-danger small-button"
                  @click="Delete(dt.id)"
                >
                  <i class="bi bi-trash"></i>
                </button>
                &nbsp;
                <button
                  type="button"
                  class="btn btn-primary small-button"
                  data-toggle="modal"
                  data-target=".bd-example-modal-lg"
                  @click="updateFunction(dt.id)"
                >
                  <i class="bi bi-pencil"></i>
                </button>
                <!-- Icône de  modification -->
              </td>
            </tr>
          </tbody>
        </table>
        <div v-if="loading" class="text-center">
          <SpinnerHookVue />
        </div>
      </div>
    </div>
  </div>

  <div
    class="modal fade bd-example-modal-lg"
    tabindex="-1"
    role="dialog"
    aria-labelledby="myLargeModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modification</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div v-if="loading" class="text-center">
              <SpinnerHookVue />
            </div>
            <div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="recipient-name" class="col-form-label"
                    >fname:</label
                  >
                  <input type="text" :value="dataUpdate.fname" class="form-control" id="recipient-name" />
                </div>
                <div class="form-group col-md-6">
                  <label for="recipient-name" class="col-form-label"
                    >name:</label
                  >
                  <input type="text" :value="dataUpdate.name" class="form-control" id="recipient-name" />
                </div>
                <div class="form-group col-md-6">
                  <label for="recipient-name" class="col-form-label"
                    >phone:</label
                  >
                  <input type="text" :value="dataUpdate.phone" class="form-control" id="recipient-name" />
                </div>
                <div class="form-group col-md-6">
                  <label for="recipient-name" class="col-form-label"
                    >email:</label
                  >
                  <input
                    type="email"
                    class="form-control"
                    id="recipient-name"
                    :value="dataUpdate.email"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary">Modifier</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal ajouter  -->
  <div
    class="modal fade bd-ajouter-modal-lg"
    tabindex="-1"
    role="dialog"
    aria-labelledby="myLargeModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">New message</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label"
                >Recipient:</label
              >
              <input type="text" class="form-control" id="recipient-name" />
            </div>
            <div class="form-group">
              <label for="message-text" class="col-form-label">Message:</label>
              <textarea class="form-control" id="message-text"></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary">Send message</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.small-button {
  font-size: 12px;
  padding: 6px 12px;
}
</style>
<style>
</style>