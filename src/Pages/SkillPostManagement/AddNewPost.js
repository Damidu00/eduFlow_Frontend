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

    






}