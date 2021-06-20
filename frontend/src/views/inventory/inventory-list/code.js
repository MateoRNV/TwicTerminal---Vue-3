export const codeBasic = `
<template>
  <b-tabs pills>
    <b-tab
      title="Overview"
      active
    >
      <b-card-text>
        Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot cake pastry. Lollipop caramels sesame snaps pie tootsie roll macaroon dessert. Muffin jujubes brownie dragée ice cream cheesecake icing. Danish brownie pastry cotton candy donut. Cheesecake donut candy canes. Jelly beans croissant bonbon cookie toffee. Soufflé croissant lemon drops tootsie roll toffee tiramisu.
      </b-card-text>
    </b-tab>
    <b-tab title="Activities">
      <b-card-text>
        Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing cupcake.Bear claw chocolate chocolate cake jelly-o pudding lemon drops sweet roll sweet candy. Chocolate sweet chocolate bar candy chocolate bar chupa chups gummi bears lemon drops.
      </b-card-text>
    </b-tab>
    <b-tab
      title="Notes"
    >
      <b-card-text>Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing cupcake.</b-card-text>
    </b-tab>
    <b-tab title="Payments">
      <b-card-text>
        Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.Chocolate bonbon chocolate chocolate cake halvah tootsie roll marshmallow. Brownie chocolate toffee toffee jelly beans bonbon sesame snaps sugar plum candy canes.
      </b-card-text>
    </b-tab>
  </b-tabs>
</template>

<script>
import { BTab, BTabs } from 'bootstrap-vue'

export default {
  components: {
    BTab,
    BTabs,
  },
}
</script>
`





export const codeAlignment = `
<template>
  <div>
    <b-tabs
      pills
      align="left"
    >
      <b-tab
        title="Overview"
        active
      >
        <b-card-text>
          {{ tabData[0]['overview'] }}
        </b-card-text>
      </b-tab>
      <b-tab title="Activities">
        <b-card-text>
          {{ tabData[1]['activities'] }}
        </b-card-text>
      </b-tab>
      <b-tab
        title="Notes"
      >
        {{ tabData[2]['notes'] }}
      </b-tab>
      <b-tab
        title="Payments"
      >
        <b-card-text>
          {{ tabData[3]['payments'] }}
        </b-card-text>
      </b-tab>
    </b-tabs>
   
    <b-tabs
      pills
      align="right"
    >
      <b-tab
        title="General"
        active
      >
        <b-card-text>
          {{ tabData[0]['general'] }}
        </b-card-text>
      </b-tab>
      <b-tab title="Front">
        <b-card-text>
          {{ tabData[1]['front'] }}
        </b-card-text>
      </b-tab>
      <b-tab
        title="Notes"
      >
        {{ tabData[2]['notes'] }}
      </b-tab>
      <b-tab title="Payments">
        <b-card-text>
          {{ tabData[3]['payments'] }}
        </b-card-text>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import { BTabs, BTab } from 'bootstrap-vue'

export default {
  components: {
    BTabs,
    BTab,
  },
   data() {
    return {
      tabData: [
        { overview: 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot cake pastry.' },
        { activities: 'Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.Pudding candy canes sugar plum cookie chocolate cake powder croissant.' },
        { notes: 'loremadjlkdsajflk' },
        { payments: 'Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit.' },
        { general: 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot cake pastry.' },
        { front: 'Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.Pudding candy canes sugar plum cookie chocolate cake powder croissant.' },
      ],
    }
  },
}
</script>
`

