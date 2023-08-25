<template>
  <LayoutComponentVue>
    <div class="content-body">
      <!-- row -->
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">
                  Ajouter <span class="badge badge-primary">User</span>
                </h4>
              </div>
              <div class="card-body">
                <div class="basic-form">
                  <form>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control input-default"
                        placeholder="Noms"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control input-rounded"
                        placeholder="Téléphone"
                      />
                    </div>
                    <div class="form-group">
                      <!-- <label for="adresse" class="form-label">Adresse e-mail</label> -->
                      <input
                        type="text"
                        class="form-control input-rounded"
                        placeholder="Adresse email"
                      />
                    </div>
                    <div class="form-group">
                      <!-- <label for="role" class="form-label">Rôle</label> -->
                      <select class="form-control input-rounded">
                        <option>Sélectionner le rôle</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                      </select>
                    </div>

                    <div class="mb-3 form-group">
                      <div class="custom-file">
                        <input type="file" class="custom-file-input" />
                        <label class="custom-file-label">image profil</label>
                      </div>
                    </div>

                    <button type="submit" class="btn btn-primary btn-md mt-3">
                      ADD USER
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </LayoutComponentVue>
</template>

<script>
import LayoutComponentVue from "@/components/LayoutComponent.vue";
export default {
  name: "AddUser",
  components: {
    LayoutComponentVue,
  },
};
</script>

<style>
</style>