import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, MessageSquare, Star } from 'lucide-react';

const data = [
  { id: 1, title: 'Repair Electronics', description: 'Exchange a repair service for a cooking lesson.', image: 'https://source.unsplash.com/800x600/?repair,electronics', rating: 4.5 },
  { id: 2, title: 'Graphic Design', description: 'Design a logo in exchange for cleaning services.', image: 'https://source.unsplash.com/800x600/?design,graphics', rating: 4.7 },
  { id: 3, title: 'Language Lesson', description: 'Teach a language in exchange for a small task.', image: 'https://source.unsplash.com/800x600/?language,teaching', rating: 4.2 }
];

export default function App() {
  const [search, setSearch] = useState('');
  const [messages, setMessages] = useState([]);

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const sendMessage = (serviceId) => {
    const message = `Interested in service ${serviceId}`;
    setMessages([...messages, message]);
    alert(`Message sent: ${message}`);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Skills and Micro-Services Exchange Platform</h1>
      <Input
        placeholder="Search for services or skills..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredData.map(item => (
          <motion.div key={item.id} whileHover={{ scale: 1.05 }} className="bg-white rounded-2xl shadow-md">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-t-2xl" />
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <div className="flex items-center mb-4">
                <Star className="text-yellow-500 mr-1" />
                <span>{item.rating}</span>
              </div>
              <Button onClick={() => sendMessage(item.id)}>Send Message</Button>
            </CardContent>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
