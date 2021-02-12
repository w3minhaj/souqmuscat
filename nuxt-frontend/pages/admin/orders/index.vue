<template>
  <div>
    <h1>Orders</h1>
    <vs-table
      shadow
      style="
        margin-top: 30px;
        box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, var(--vs-shadow-opacity));
      "
    >
      <template #thead>
        <vs-tr>
          <vs-th> Name </vs-th>
          <vs-th> Email </vs-th>
          <vs-th> Id </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr :key="i" v-for="(tr, i) in 10" :data="tr">
          <vs-td>
            {{ tr }}
          </vs-td>
          <vs-td>
            {{ tr }}
          </vs-td>
          <vs-td>
            {{ tr }}
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>

<script>
export default {
  layout: "dashboard",
};
</script>

<style>
</style>