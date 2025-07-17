import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ViewExposTable = () => {
  const [expos, setExpos] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDate, setEditDate] = useState('');
  const [editLocation, setEditLocation] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editTheme, setEditTheme] = useState('');

  const fetchExpos = async () => {
    try {
      const response = await axios.get('http://localhost:2000/getexpos');
      setExpos(response.data.expos);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchExpos();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this expo?')) return;
    try {
      await axios.delete(`http://localhost:2000/deleteexpo/${id}`);
      setExpos((prev) => prev.filter((expo) => expo._id !== id));
      toast.success('Expo deleted successfully');
    } catch (err) {
      console.log(err);
      toast.error('Failed to delete expo');
    }
  };

  const handleEdit = (expo) => {
    setEditingId(expo._id);
    setEditTitle(expo.title);
    setEditDate(expo.date);
    setEditLocation(expo.location);
    setEditDescription(expo.description);
    setEditTheme(expo.theme);
  };

  const saveEdit = async () => {
    try {
      await axios.put(`http://localhost:2000/updateexpo/${editingId}`, {
        title: editTitle,
        date: editDate,
        location: editLocation,
        description: editDescription,
        theme: editTheme,
      });

      setExpos((prev) =>
        prev.map((expo) =>
          expo._id === editingId
            ? { ...expo, title: editTitle, date: editDate, location: editLocation, description: editDescription, theme: editTheme }
            : expo
        )
      );

      toast.success('Expo updated successfully');
      setEditingId(null);
      resetEditFields();
    } catch (err) {
      console.log(err);
      toast.error('Failed to update expo');
    }
  };

  const resetEditFields = () => {
    setEditTitle('');
    setEditDate('');
    setEditLocation('');
    setEditDescription('');
    setEditTheme('');
  };

  return (
    <>
      <p className="font-bold text-2xl mb-4 uppercase underline underline-offset-8">All Expos</p>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-gray-100">
        <table className="table text-center">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Date</th>
              <th>Location</th>
              <th>Description</th>
              <th>Theme</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {expos.map((expo, index) => (
              <tr key={expo._id}>
                <th>{index + 1}</th>
                <td>
                  {editingId === expo._id ? (
                    <input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} className="input input-bordered w-full" />
                  ) : (
                    expo.title
                  )}
                </td>
                <td>
                  {editingId === expo._id ? (
                    <input value={editDate} onChange={(e) => setEditDate(e.target.value)} className="input input-bordered w-full" />
                  ) : (
                    expo.date
                  )}
                </td>
                <td>
                  {editingId === expo._id ? (
                    <input value={editLocation} onChange={(e) => setEditLocation(e.target.value)} className="input input-bordered w-full" />
                  ) : (
                    expo.location
                  )}
                </td>
                <td>
                  {editingId === expo._id ? (
                    <input value={editDescription} onChange={(e) => setEditDescription(e.target.value)} className="input input-bordered w-full" />
                  ) : (
                    expo.description
                  )}
                </td>
                <td>
                  {editingId === expo._id ? (
                    <input value={editTheme} onChange={(e) => setEditTheme(e.target.value)} className="input input-bordered w-full" />
                  ) : (
                    expo.theme
                  )}
                </td>
                <td className="space-x-2">
                  {editingId === expo._id ? (
                    <>
                      <button className="btn btn-success btn-sm" onClick={saveEdit}>
                        Save
                      </button>
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => {
                          setEditingId(null);
                          resetEditFields();
                        }}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="btn btn-info btn-sm" onClick={() => handleEdit(expo)}>
                        Edit
                      </button>
                      <button className="btn btn-error btn-sm" onClick={() => handleDelete(expo._id)}>
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Toaster position="top-center" />
    </>
  );
};

export default ViewExposTable;
