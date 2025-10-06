import { useEffect, useState } from 'react';
import { Clock, CheckCircle2, X } from 'lucide-react';

interface Notification {
  id: number;
  name: string;
  city: string;
  timeAgo: string;
}

function App() {
  const [time, setTime] = useState({ hours: 8, minutes: 52, seconds: 45 });
  const [viewers, setViewers] = useState(497);
  const [notification, setNotification] = useState<Notification | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
            minutes = 59;
            hours--;
          }
        }
        if (hours < 0) hours = 0;
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const viewerTimer = setInterval(() => {
      setViewers(prev => {
        const change = Math.floor(Math.random() * 7) - 3;
        const newValue = prev + change;
        return Math.max(480, Math.min(520, newValue));
      });
    }, 3000);

    return () => clearInterval(viewerTimer);
  }, []);

  useEffect(() => {
    const names = [
      { name: 'Ana Silva', city: 'Maputo' },
      { name: 'Maria Santos', city: 'Matola' },
      { name: 'João Costa', city: 'Beira' },
      { name: 'Clara Oliveira', city: 'Nampula' },
      { name: 'Rita Fernandes', city: 'Maputo' },
      { name: 'Paula Almeida', city: 'Quelimane' },
      { name: 'Sofia Pereira', city: 'Tete' },
      { name: 'Beatriz Rodrigues', city: 'Maputo' },
      { name: 'Carla Martins', city: 'Chimoio' },
      { name: 'Isabel Gomes', city: 'Pemba' }
    ];

    const showNotification = () => {
      const randomPerson = names[Math.floor(Math.random() * names.length)];
      const minutesAgo = Math.floor(Math.random() * 5) + 1;

      const newNotification: Notification = {
        id: Date.now(),
        name: randomPerson.name,
        city: randomPerson.city,
        timeAgo: `há ${minutesAgo} minuto${minutesAgo > 1 ? 's' : ''}`
      };

      setNotification(newNotification);

      setTimeout(() => {
        setNotification(null);
      }, 5000);
    };

    const notificationTimer = setInterval(showNotification, 7000);
    showNotification();

    return () => clearInterval(notificationTimer);
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://scripts.converteai.net/bf7b07ce-7f37-4cc0-baf1-0d1b3e8d08c7/players/68e3ccf4dd351732e60561ce/v4/player.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const formatTime = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <div className="bg-red-700 text-white text-center py-3 px-4 flex justify-center items-center gap-2 flex-wrap">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Mozambique.svg"
          alt="Moçambique"
          className="w-8 h-5 rounded"
        />
        <span className="text-lg font-bold">Promoção válida para Moçambique por:</span>
        <span className="text-xl font-bold text-yellow-300 flex items-center gap-1">
          <Clock className="w-5 h-5" />
          {formatTime(time.hours)}h {formatTime(time.minutes)}m {formatTime(time.seconds)}s
        </span>
      </div>

      {/* Headline */}
      <div className="bg-white text-center py-6 px-5 mt-3 shadow-sm">
        <h1 className="text-red-600 text-2xl md:text-3xl font-bold mb-3">
          ⚠️ URGENTE: Nutricionista revela{' '}
          <span className="text-gray-900">fórmula natural que elimina até 17kg</span>
        </h1>
        <p className="text-gray-600 text-lg">Sem dieta. Sem exercícios. Sem sofrimento.</p>
      </div>

      {/* Video */}
      <div className="max-w-3xl mx-auto my-8 px-4">
        <div className="w-full">
          <vturb-smartplayer
            id="vid-68e3ccf4dd351732e60561ce"
            style={{ display: 'block', margin: '0 auto', width: '100%' }}
          />
        </div>
      </div>

      <div className="text-center text-red-600 font-bold mb-6">
        🔥 {viewers} pessoas estão assistindo agora.
      </div>

      {/* CTA Button */}
      <div className="text-center my-8 px-4">
        <a
          href="https://pay.lojou.app/p/Jtik1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-red-600 to-orange-500 text-white text-xl font-bold py-4 px-10 rounded-xl shadow-lg transition-all duration-300 hover:from-orange-500 hover:to-red-600 hover:scale-105"
        >
          👉 QUERO EXPERIMENTAR O TRUQUE ASIÁTICO AGORA
        </a>
      </div>

      {/* Comments Section */}
      <div className="bg-white max-w-3xl mx-auto my-8 rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-bold mb-5">24 Comentários</h3>

        <div className="space-y-4">
          {[
            {
              img: 1,
              nome: 'Emilia Yager',
              texto: 'Perdi 18kg sem passar fome nem fazer dietas malucas! 😱 Obrigada, Dra Laura Gutíerrez — o Truque Asiático vale MESMO a pena. Mudou a minha vida!',
              tempo: '3 min'
            },
            {
              img: 2,
              nome: 'Juliana Aparecida',
              texto: 'Dra Laura mudou minha vida! Hoje me sinto muito melhor com o meu corpo, sem vergonha de usar roupa justa ❤️',
              tempo: '4 min'
            },
            {
              img: 3,
              nome: 'Maria do Rosário',
              texto: 'Sou de Maputo, alguém pode me dizer se funciona mesmo?',
              tempo: '5 min'
            },
            {
              img: 4,
              nome: 'Rosana Almeida',
              texto: 'Sou de Maputo também! Tive ótimo resultado, usei por 2 meses e perdi 15kg 💪',
              tempo: '10 min'
            },
            {
              img: 5,
              nome: 'Maira Laura',
              texto: 'Muito obrigado, vou experimentar 🙏🙏🙏',
              tempo: '12 min'
            }
          ].map((comment, index) => (
            <div key={index} className="flex items-start border-b border-gray-100 pb-4">
              <img
                src={`https://i.pravatar.cc/45?img=${comment.img}`}
                alt={comment.nome}
                className="w-11 h-11 rounded-full mr-3"
              />
              <div className="flex-1">
                <p className="font-bold text-gray-800">{comment.nome}:</p>
                <p className="text-gray-700 my-1">{comment.texto}</p>
                <p className="text-gray-400 text-sm">{comment.tempo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-6 px-4">
        <p>© 2025 Truque Asiático — Todos os direitos reservados.</p>
        <p>Os resultados podem variar de pessoa para pessoa. Este site não é afiliado ao Facebook.</p>
      </footer>

      {/* Purchase Notification */}
      {notification && (
        <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-96 bg-white border-l-4 border-green-500 shadow-2xl rounded-lg p-4 animate-slide-in z-50">
          <button
            onClick={() => setNotification(null)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="flex items-start gap-3">
            <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex-1">
              <p className="font-bold text-gray-800 text-sm">
                {notification.name} de {notification.city}
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Acabou de adquirir o Truque Asiático
              </p>
              <p className="text-gray-400 text-xs mt-1">{notification.timeAgo}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
