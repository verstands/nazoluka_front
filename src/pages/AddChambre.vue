<template>
  <LayoutComponentVue>
    <div class="content-body">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">
                  Ajouter <span class="badge badge-primary">Chambre</span>
                </h4>
              </div>
              <div class="card-body">
                <div class="basic-form">
                  <form>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control input-rounded"
                        placeholder="Prix Chambre"
                      />
                    </div>
                    <div class="form-group">
                      <select class="form-control input-rounded">
                        <option>Sélectionner Hôtel</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                      </select>
                    </div>

                    <div class="form-group">
                      <select class="form-control input-rounded">
                        <option>Sélectionner Type Chambre</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                      </select>
                    </div>

                    <div class="mb-3 form-group">
                      <div class="custom-file">
                        <input type="file" class="custom-file-input" />
                        <label class="custom-file-label">image cover</label>
                      </div>
                    </div>

                    <div class="form-group text-center">
                      <div class="form-check form-check-inline">
                        <label class="form-check-label">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            value=""
                          />Wifi
                        </label>
                      </div>

                      <div class="form-check form-check-inline">
                        <label class="form-check-label">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            value=""
                          />Jaccouzi
                        </label>
                      </div>
                    </div>

                    <button type="submit" class="btn btn-primary btn-md mt-3">
                      ADD HOTEL
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
  name: "AddChambre",
  components: {
    LayoutComponentVue,
  },
};
</script>

<style>
</style>