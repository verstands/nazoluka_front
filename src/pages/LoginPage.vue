<script setup>
import { ref, onMounted } from "vue";
import Login from "../components/stores/LoginStore";

const data = ref([]);

onMounted(async () => {
  try {
    data.value = await Login();
    alert(JSON.stringify(data.value));
  } catch (error) {
    console.error(error);
  }
});
</script>
<template>
  <br />
  <div class="h-100">
    <div class="authincation h-100">
      <div class="container h-100">
        <div class="row justify-content-center h-100 align-items-center">
          <div class="col-md-5">
            <div class="authincation-content">
              <div class="row no-gutters">
                <div class="col-xl-12">
                  <div class="auth-form">
                    <img
                      src="images/logo-naz-01.png"
                      class="img-fluid"
                      style="width: 90%"
                    />
                    <h4 class="text-center mb-4">Sign in your account</h4>
                    <form action="#!">
                      <div class="form-group">
                        <label class="mb-1"><strong>Email</strong></label>
                        <input
                          type="email"
                          class="form-control"
                          placeholder="adresse e-mail"
                        />
                      </div>
                      <div class="form-group">
                        <label class="mb-1"><strong>Password</strong></label>
                        <input
                          type="password"
                          class="form-control"
                          placeholder="password"
                        />
                      </div>
                      <div
                        class="form-row d-flex justify-content-between mt-4 mb-2"
                      >
                        <div class="form-group">
                          <div class="custom-control custom-checkbox ml-1">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="basic_checkbox_1"
                            />
                            <label
                              class="custom-control-label"
                              for="basic_checkbox_1"
                              >Remember me</label
                            >
                          </div>
                        </div>
                        <div class="form-group">
                          <a href="forgot-password.php">Forgot Password?</a>
                        </div>
                      </div>
                      <div class="text-center">
                        <button type="submit" class="btn btn-primary btn-block">
                          SE CONNECTER
                        </button>
                      </div>
                    </form>
                    <div class="new-account mt-3">
                      <p>
                        Don't have an account?
                        <a class="text-primary" href="register.php">Sign up</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
</style>