import React, { useState } from 'react';
import axios from 'axios';
import { Upload, Image as ImageIcon, Video as VideoIcon, X, Plus, Send, Type, FileText, Loader } from 'lucide-react';
import SideBar from '../../Components/SideBar/SideBar';
import './AddNewPost.css';


function AddNewPost() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [media, setMedia] = useState([]);
    const [mediaPreviews, setMediaPreviews] = useState([]);
    const userID = localStorage.getItem('userID');
    const [isLoading, setIsLoading] = useState(false);

    const handleMediaChange = (e) => {
        const files = Array.from(e.target.files);
        const maxFileSize = 50 * 1024 * 1024;
    
        let imageCount = 0;
        let videoCount = 0;
        const previews = [];
    
        for (const file of files) {
          if (file.size > maxFileSize) {
            alert(`File ${file.name} exceeds the maximum size of 50MB.`);
            return;
          }
    
          if (file.type.startsWith('image/')) {
            imageCount++;
          } else if (file.type === 'video/mp4') {
            videoCount++;
    
            const video = document.createElement('video');
            video.preload = 'metadata';
            video.src = URL.createObjectURL(file);
    
            video.onloadedmetadata = () => {
              URL.revokeObjectURL(video.src);
              if (video.duration > 30) {
                alert(`Video ${file.name} exceeds the maximum duration of 30 seconds.`);
                return;
              }
            };
          } else {
            alert(`Unsupported file type: ${file.type}`);
            return;
          }
    
          previews.push({ type: file.type, url: URL.createObjectURL(file) });
        }
    
        if (imageCount > 3) {
          alert('You can upload a maximum of 3 images.');
          return;
        }
    
        if (videoCount > 1) {
          alert('You can upload only 1 video.');
          return;
        }
    
        setMedia(files);
        setMediaPreviews(previews);
      };
      






}