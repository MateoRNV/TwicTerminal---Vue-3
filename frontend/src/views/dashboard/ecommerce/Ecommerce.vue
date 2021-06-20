<template>
  <section id="dashboard-ecommerce">
    <b-row class="match-height">
      <b-col
        xl="4"
        md="6"
      >
        <ecommerce-medal :data="data.congratulations" />
      </b-col>
      <b-col
        xl="8"
        md="6"
      >
        <ecommerce-statistics :data="data.statisticsItems" />
      </b-col>
    </b-row>

    <b-row class="match-height">
      <b-col lg="4">
        <b-row class="match-height">
          <!-- Bar Chart - Orders -->
          <b-col
            lg="6"
            md="3"
            cols="6"
          >
            <ecommerce-order-chart :data="data.statisticsOrder" />
          </b-col>
          <!--/ Bar Chart - Orders -->
          <b-col
            lg="6"
            md="3"
            cols="6"
          >
            <ecommerce-profit-chart :data="data.statisticsProfit" />
          </b-col>
          <b-col
            lg="12"
            md="6"
          >
            <ecommerce-earnings-chart :data="data.earningsChart" />
          </b-col>
        </b-row>
      </b-col>

      <!-- Revenue Report Card -->
      <b-col lg="8">
        <ecommerce-revenue-report :data="data.revenue" />
      </b-col>
      <!--/ Revenue Report Card -->
    </b-row>

    <b-row class="match-height">
      <!-- Company Table Card -->
      <b-col lg="8">
        <ecommerce-company-table :table-data="data.companyTable" />
      </b-col>
      <!--/ Company Table Card -->

      <!-- Developer Meetup Card -->
      <b-col
        lg="4"
        md="6"
      >
        <ecommerce-meetup :data="data.meetup" />
      </b-col>
      <!--/ Developer Meetup Card -->

      <!-- Browser States Card -->
      <b-col
        lg="4"
        md="6"
      >
        <ecommerce-browser-states />
      </b-col>
      <!--/ Browser States Card -->

      <!-- Goal Overview Card -->
      <b-col
        lg="4"
        md="6"
      >
        <ecommerce-goal-overview :data="data.goalOverview" />
      </b-col>
      <!--/ Goal Overview Card -->

      <!-- Transaction Card -->
      <b-col
        lg="4"
        md="6"
      >
        <ecommerce-transactions :data="data.transactionData" />
      </b-col>
      <!--/ Transaction Card -->
    </b-row>
  </section>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'

import { getUserData } from '@/auth/utils'
import EcommerceMedal from './EcommerceMedal.vue'
import EcommerceStatistics from './EcommerceStatistics.vue'
import EcommerceRevenueReport from './EcommerceRevenueReport.vue'
import EcommerceOrderChart from './EcommerceOrderChart.vue'
import EcommerceProfitChart from './EcommerceProfitChart.vue'
import EcommerceEarningsChart from './EcommerceEarningsChart.vue'
import EcommerceCompanyTable from './EcommerceCompanyTable.vue'
import EcommerceMeetup from './EcommerceMeetup.vue'
import EcommerceBrowserStates from './EcommerceBrowserStates.vue'
import EcommerceGoalOverview from './EcommerceGoalOverview.vue'
import EcommerceTransactions from './EcommerceTransactions.vue'

export default {
  components: {
    BRow,
    BCol,

    EcommerceMedal,
    EcommerceStatistics,
    EcommerceRevenueReport,
    EcommerceOrderChart,
    EcommerceProfitChart,
    EcommerceEarningsChart,
    EcommerceCompanyTable,
    EcommerceMeetup,
    EcommerceBrowserStates,
    EcommerceGoalOverview,
    EcommerceTransactions,
  },
  data() {
    return {
      data: {},
    }
  },
  created() {
    // data
    this.$http.get('/ecommerce/data')
      .then(response => {
        this.data = response.data

        // ? Your API will return name of logged in user or you might just directly get name of logged in user
        // ? This is just for demo purpose
        const userData = getUserData()
        this.data.congratulations.name = userData.fullName.split(' ')[0] || userData.username
      })
  },
}
</script>
<style>
.main-menu .navbar-header .navbar-brand .brand-logo img {
  max-width: 115px !important;
}
.main-menu .navbar-header .navbar-brand{
  margin: 3px auto !important;
}

.main-menu .navbar-header .navbar-brand .brand-text {
  font-size: 1rem !important;
  padding-left: 7px !important;
}

.main-menu .navbar-header .navbar-brand .brand-text {
  color: #f4bc33 !important;
  font-weight: 600;
  letter-spacing: 0.01rem;
  font-size: 1.45rem;
}
.nav-pills .nav-link.active {
    border-color: #ff9f43 !important;
    -webkit-box-shadow: 0 4px 18px -4px rgb(243 187 55) !important;
    box-shadow: 0 4px 18px -4px rgb(115 103 240 / 65%) !important;
}
.nav-pills .nav-link.active, [dir] .nav-pills .show > .nav-link {
    background-color: #f39c41 !important;
}
[dir] .customizer .customizer-toggle {
    background: #f39c41 !important;
}
a {
    color: #ff9f43;
}
.btn-primary {
    border-color: #f39c41 !important;
    background-color: #f39c41 !important;
}
.main-menu.menu-dark .navigation > li.active > a {
    background: linear-gradient(
118deg
, #e8b231, rgb(243 156 65));
}
.main-menu.menu-dark .navigation > li.active > a {
    -webkit-box-shadow: 0 0 10px 1px rgb(40 48 70);
    box-shadow: 0 0 10px 1px rgb(40 48 70);
    border-radius: 4px;
}

.page-item.active .page-link {
    border-color: #ff9f43;
    background-color: #ff9f43;
}
.page-item.next-item .page-link:active, .page-item.next-item .page-link:hover {
    background-color: #ff9f43 !important;
}
</style>
<style lang="scss">
@import '@core/scss/vue/pages/dashboard-ecommerce.scss';
@import '@core/scss/vue/libs/chart-apex.scss';
</style>
