<script lang="ts" setup>
import { Scatter } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  TooltipItem,
} from "chart.js";
import { computed } from "vue";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

const scatterData = [
  {
    x: "Normal",
    y: "Flying",
    label: "Pidgey",
  },
  {
    x: "Normal",
    y: "Flying",
  },
  {
    x: "Normal",
    y: "Fairy",
  },
];

const chartOptions = computed(() => {
  return {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "category",
        labels: [
          "Normal",
          "Fighting",
          "Flying",
          "Poison",
          "Ground",
          "Rock",
          "Bug",
          "Ghost",
          "Steel",
          "Fire",
          "Water",
          "Grass",
          "Electric",
          "Psychic",
          "Ice",
          "Dragon",
          "Dark",
          "Fairy",
        ],
      },
      y: {
        type: "category",
        labels: [
          "Normal",
          "Fighting",
          "Flying",
          "Poison",
          "Ground",
          "Rock",
          "Bug",
          "Ghost",
          "Steel",
          "Fire",
          "Water",
          "Grass",
          "Electric",
          "Psychic",
          "Ice",
          "Dragon",
          "Dark",
          "Fairy",
        ].reverse(),
      },
    },
    plugins: {
      tooltip: {
        enabled: false,
        callbacks: {
          label: (context: TooltipItem<"scatter">) => {
            console.log(scatterData[context.dataIndex].label);
          },
        },
      },
    },
  };
});

const chartData = computed(() => {
  return {
    datasets: [
      {
        label: "Normal Type",
        fill: false,
        backgroundColor: "#f87979",
        data: scatterData,
      },
      {
        label: "Poison Type",
        fill: false,
        borderColor: "#7acbf9",
        backgroundColor: "#7acbf9",
        data: [
          {
            x: "Poison",
            y: "Ground",
          },
        ],
      },
    ],
  };
});
</script>

<template>
  <Scatter
    chart-id="scatter-chart"
    :chart-options="chartOptions"
    :chart-data="chartData"
  />
</template>
