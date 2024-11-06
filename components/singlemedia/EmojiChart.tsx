"use client";
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface EmojiChartProps {
  border?: boolean;
}

function EmojiChart({ border = false }: EmojiChartProps) {
  const [chartData] = useState<ApexOptions>({
    series: [
      {
        name: 'Emotion Frequency',
        data: [10, 15, 12, 8, 7, 16, 11, 13, 10, 9, 15, 12, 11, 13, 10, 9, 15, 12, 20],
      },
    ],
    chart: {
      type: 'bar',
      toolbar: {
        show: false,
      },
      background: 'none',
    },
    xaxis: {
      categories: [
        '😃', '😭', '😱', '🤯', '🤪', '🥳', '😵', '😍', '🤔', '😏', '😒', '😳', '🥳', '😵', '😍', '🤔', '😏', '😒', '😳',
      ],
      labels: {
        show: true,
        style: {
          fontSize: '16px',
        },
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '48%',
        borderRadius: 8,
        borderRadiusApplication: 'end',
      },
    },
    grid: {
      show: false,
    },
    fill: {
      colors: ['#804c39'],
    },
    dataLabels: {
      enabled: false,
    },
    theme: {
      mode: 'dark',
    },
    tooltip: {
      theme: 'dark',
      x: {
        show: true,
      },
      y: {
        formatter: (val: number) => `${val} reactions`,
      },
    },
  });

  return (
    <div className={`chart-container flex flex-col flex-grow ${border ? 'border border-[#262626] pt-7 px-4 rounded-lg' : ''}`}>
      <p className="text-xl lg:text-2xl font-medium text-white mb-4">Emotion Statistics</p>
      <div className="overflow-x-auto">
        <div style={{ minWidth: '600px' }}> 
          <Chart options={chartData} series={chartData.series} type="bar" height={300} />
        </div>
        </div>
    </div>
  );
}

export default EmojiChart;
