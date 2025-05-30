import { useState } from 'react';
import { TransactionItem } from '../components/TransactionItem';
import { Sidebar } from '../components/Sidebar';

const transactions = [
  {
    icon: '/sbp-icon.png',
    type: 'СПБ',
    date: '27.04.2025 / 16:56',
    status: 'Успешен',
    sum: 75000,
    number: '337850947',
    kind: 'Пополнение',
  },
  {
    icon: '/card-icon.png',
    type: 'Банковская карта',
    date: '28.04.2025 / 10:15',
    status: 'Отклонен',
    sum: 1500,
    number: '337850802',
    kind: 'Пополнение',
  },
  {
    icon: '/card-icon.png',
    type: 'Банковская карта',
    date: '29.04.2025 / 09:30',
    status: 'Успешен',
    sum: 3000,
    number: '337850999',
    kind: 'Вывод',
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<'Все' | 'Пополнение' | 'Вывод'>('Все');
  const filtered = transactions.filter((t) => activeTab === 'Все' || t.kind === activeTab);

  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4">История платежей</h1>
        <div className="mb-4 border-b border-gray-700 flex gap-4">
          {['Все', 'Пополнение', 'Вывод'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={\`pb-2 px-4 \${activeTab === tab ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-gray-400 hover:text-yellow-300'}\`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="space-y-2">
          {filtered.map((t) => (
            <TransactionItem key={t.number} {...t} />
          ))}
        </div>
      </main>
    </div>
  );
}
