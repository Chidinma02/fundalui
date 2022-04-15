<template>
  <div>
    <WorkspaceJsonSpinner v-if="loading === true" />
    <div class="container" v-if="loading === false">
      <div class="row">
        <div class="col-md-5 col-12 mt-3">
          <div class="logo">
            <img
              src="../assets/Fundall-MintGreen-Lockup.png"
              class="img-fluid"
            />
          </div>
          <div class="row mt-5">
            <div class="col-12 col-sm-12 col-md-3">
              <div class="co text-center">
                <img
                  v-if="avater === ''"
                  src="../assets/Vector.png"
                  class="mt-5 mb-5 img-fluid"
                />
                <img v-else :src="avater" class="img-fluid" />
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-8 mt-5">
              <div class="logo">
                <h1 class="h1-for-target">{{ firstname }} {{ lastname }}</h1>
                <p class="p-for-target">{{ email }}</p>
              </div>
            </div>
          </div>
          <div class="logo">
            <p class="p-for-target mt-5">Target Monthly Expenses</p>
            <h4 class="">#{{ total_balance }}</h4>

            <div>
              <div class="progress">
                <div
                  class="progress-bar bg-success"
                  role="progressbar"
                  style="width: 20%"
                  aria-valuenow="spent"
                  aria-valuemin="0"
                  aria-valuemax="income"
                ></div>
              </div>
            </div>
          </div>
          <div>
            <div class="pag">
              <h4 class="mt-5 logo">Daily Expenses Summary</h4>
              <div>
                <table class="table table-borderless">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Date</th>
                      <th scope="col">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row"><img src="../assets/Mask.png" /></th>
                      <td>30 Nov,2018</td>
                      <td class="welcomback">30,000</td>
                    </tr>
                    <tr>
                      <th scope="row"><img src="../assets/Mask.png" /></th>
                      <td>25 Nov,2018</td>
                      <td class="welcomeback">30,000</td>
                    </tr>
                    <tr>
                      <th scope="row"><img src="../assets/Mask.png" /></th>
                      <td>28 Oct,2018</td>
                      <td class="welcomeback">30,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="row">
                <div class="col mt-3">
                  <p><img src="../assets/Group (3).png" /></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-7 col-12 pt-5 fo">
          <div class="row ro pt-3 pb-3 container">
            <div class="col-8">
              <h2 class="logo">
                <span class="welcomback">Welcome back,</span>{{ firstname }}
              </h2>
              <p class="logo">Now,let's get your expenses for this month.</p>
            </div>
            <div class="col-4">
              <img src="../assets/Group.png" class="je" />
            </div>
          </div>
          <div class="">
            <form class="row g-3">
              <div class="col-8">
                <label for="inputAddress" class="form-label"
                  >Target Monthly Expenses</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="0"
                />
              </div>
              <div class="col-8">
                <label for="inputAddress" class="form-label">Date</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="0"
                />
              </div>
              <div class="col-md-7">
                <label for="inputAddress2" class="form-label"
                  >Today's Expenses</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress2"
                  placeholder="Pizza"
                />
              </div>
              <div class="col-md-5">
                <label for="inputAddress2" class="form-label mt-3"></label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress2"
                  placeholder="10,000"
                />
              </div>
              <div class="col-md-7">
                <label for="inputAddress2" class="form-label"></label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress2"
                  placeholder="Textbook"
                />
              </div>
              <div class="col-md-5">
                <label for="inputAddress2" class="form-label"></label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress2"
                  placeholder="10,000"
                />
              </div>
              <div class="col-md-7">
                <label for="inputAddress2" class="form-label"></label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress2"
                  placeholder="Tuition fee"
                />
              </div>
              <div class="col-md-5">
                <label for="inputAddress2" class="form-label"></label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress2"
                  placeholder="2"
                />
              </div>
              <div class="row mt-5">
                <div class="col-md-4 col-sm-12"></div>
                <div class="col-md-5 ml-5 col-sm-6">
                  <h5>Total Actual Expenses: <span class="ml-5">#</span></h5>
                </div>
                <div class="col-md-3 ml-5 col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="40,000"
                    aria-label="First name"
                  />
                </div>
              </div>
              <!-- <div class="col-2"></div> -->
              <!-- <div class="col-10"> -->
              <!-- <p>Total Actual Expenses:#</p> -->
              <!-- </div> -->
              <div class="col-12">
                <button type="submit" class="btn bt mb-5">
                  SAVE TODAY'S EXPENSES
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import WorkspaceJsonSpinner from "./ui/spinner";
export default {
  name: "FundalDash",
  components: {
    WorkspaceJsonSpinner,
  },
  data() {
    return {
      //   bars: [{ variant: "success", value: 75 }],
      //   timer: null,
      value: 33.333333333,
      max: 50,
      variant: "success",
      firstname: "",
      lastname: "",
      email: "",
      avater: "",
      monthly_target: "",
      income: "",
      total_balance: "",
      loading: false,
      error: null,
    };
  },

  async created() {
    // console.log(localStorage.getItem("token"));
    this.loading = true;
    try {
      const response = await axios.get(
        "https://campaign.fundall.io/api/v1/base/profile",
        {
          headers: {
            Accept: " application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      const data = response.data.success.data;
      this.firstname = data.firstname;
      (this.lastname = data.lastname),
        (this.avater = data.avatar),
        (this.email = data.email),
        (this.income = data.income),
        (this.spent = data.spent),
        (this.total_balance = data.total_balance);
      console.log(response);
      this.loading = false;
    } catch (err) {
      console.log(err);
      this.loading = false;
      this.error = err.message;
    }
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="css" scoped>
* {
  color: black;
}
.logo {
  text-align: left;
}
.co {
  /* height: 120px;*/
  border-radius: 20px;
  background-color: #c4c4c4;
}
.p-for-target {
  font-size: 20px;
  font-weight: 500;
  margin-top: 10px;
}
.h1-for-target {
  font-size: 30px;
  font-weight: bold;
}
.pro {
  height: 7px !important;
}
.welcomback {
  color: #4ce895;
}
.fo {
  background-color: #f2f3f7;
}
.ro {
  background-color: white;
  border-radius: 10px;
  margin-left: 5px;
}
.je {
  margin: -60px;
}
.bt {
  color: black;
  background-color: #4ce895;
  font-weight: bold;
}
.pro {
  width: 100%;
  height: 100%;
}
.sp {
  border: 2px solid solid black;
}
</style>