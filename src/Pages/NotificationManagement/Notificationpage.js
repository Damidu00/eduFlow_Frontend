import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideBar from '../../Components/SideBar/SideBar';
import { 
  Check, Trash2, Bell, BellOff, RefreshCw, Clock, 
  Mail, AlertTriangle, CheckCircle, Info, Sparkles,
  MessageSquare, BookOpen, TrendingUp, Zap, Star,
  Award, Gift, Heart, ThumbsUp, Share2
} from 'lucide-react';
import './Notifications.css';

function NotificationsPage() {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const userId = localStorage.getItem('userID');
  
    const fetchNotifications = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:8080/notifications/${userId}`);
        setNotifications(response.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      } finally {
        setLoading(false);
      }
    };
}