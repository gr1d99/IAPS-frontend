<template>
  <div class="container">
    <div class="row">
      <div class="col col-lg-8 offset-2">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" id="openings-tab" data-toggle="tab" href="#openings" role="tab" aria-controls="home" aria-selected="true">Openings</a>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="openings" role="tabpanel" aria-labelledby="openings-tab">
            <div class="openings-wrapper">
              <div class="all-openings-btn">
                <button type="button" class="btn btn-primary">
                  All <span class="badge badge-light">4</span>
                </button>
              </div>

              <div class="openings-content">
                <table class="table">
                  <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Open</th>
                    <th scope="col">Location</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>
                      <a href="#">Andela</a>
                    </td>
                    <td>
                      True
                    </td>
                    <td>Nairobi, Kenya</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>
                      <a href="#">Africas Talking</a>
                    </td>
                    <td>False</td>
                    <td>Nairobi, Kenya</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>
                      <a href="#">Ceramics Kenya</a>
                    </td>
                    <td>True</td>
                    <td>Nakuru, Kenya</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AdminHomePage',
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
  .openings-wrapper {
    padding-top: 20px;
  }
  .openings-content {
    padding-top: 20px;
  }
</style>
