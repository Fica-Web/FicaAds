import React, { useEffect, useState } from "react";
import { getTeamApi, deleteTeamMemberApi, createTeamMemberApi, updateTeamMemberApi } from "../../../utils/api/teamApi";
import { toast } from "react-toastify";
import Modal from "../reusable/Modal";
import LoadingButton from "../reusable/LoadingButton";

const AdminTeamList = () => {
    const [teamMembers, setTeamMembers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: "", role: "", image: null });
    const [editingMemberId, setEditingMemberId] = useState(null);

    useEffect(() => {
        fetchTeamMembers();
    }, []);

    const fetchTeamMembers = async () => {
        setLoading(true);
        try {
            const data = await getTeamApi();
            setTeamMembers(data.team);
        } catch (error) {
            console.error("Failed to fetch team members:", error);
        }
        setLoading(false);
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this team member?")) return;

        try {
            await deleteTeamMemberApi(id);
            setTeamMembers(prevMemb => prevMemb.filter(member => member._id !== id));
        } catch (error) {
            console.error("Error deleting team member:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({ ...formData, [name]: files ? files[0] : value });
    };

    const handleAddOrEditMember = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            let updatedMember;

            if (editingMemberId) {
                // Update existing member
                const response = await updateTeamMemberApi(editingMemberId, formData);
                updatedMember = response.teamMember;
                console.log('updated member form frontend:', updatedMember);

                // Replace the updated member in the state
                setTeamMembers(prevMemb =>
                    prevMemb.map(member =>
                        member._id === editingMemberId ? updatedMember : member
                    )
                );
            } else {
                // Create new member
                const response = await createTeamMemberApi(formData);
                updatedMember = response.teamMember
                console.log('updated member form frontend:', updatedMember);

                // Add the new member to the state
                setTeamMembers(prevMemb => [...prevMemb, updatedMember]);
            }

            setIsModalOpen(false);
            setEditingMemberId(null);
            setFormData({ name: "", role: "", image: null });
        } catch (error) {
            console.error("Error submitting team member:", error);
        }

        setLoading(false);
    };

    const openEditModal = (member) => {
        setFormData({ name: member.name, role: member.role, image: null }); // Preserve text values
        setEditingMemberId(member._id);
        setIsModalOpen(true);
    };

    return (
        <div className="p-5">
            <div className="flex justify-end items-center mb-4">
                <button
                    onClick={() => {
                        setIsModalOpen(true);
                        setEditingMemberId(null);
                        setFormData({ name: "", role: "", image: null });
                    }}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg"
                >
                    + Add Member
                </button>
            </div>

            {loading ? (
                <p className="text-center">Loading team members...</p>
            ) : teamMembers.length === 0 ? (
                <p className="text-center text-gray-500">No team members found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member) => (
                        <div key={member._id} className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center">
                            <img
                                src={member.imageUrl}
                                alt={member.name}
                                className="w-24 h-24 rounded-full object-cover mb-3"
                            />
                            <h3 className="text-lg font-semibold">{member.name}</h3>
                            <p className="text-gray-500">{member.role}</p>
                            <div className="mt-4 flex gap-3">
                                <button
                                    onClick={() => openEditModal(member)}
                                    className="bg-blue-500 text-white px-3 py-1 rounded"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(member._id)}
                                    className="bg-red-500 text-white px-3 py-1 rounded"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Add/Edit Team Member Modal */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h3 className="text-xl font-semibold mb-4">
                    {editingMemberId ? "Edit Team Member" : "Add Team Member"}
                </h3>
                <form onSubmit={handleAddOrEditMember}>
                    <div className="mb-3">
                        <label className="block font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full border p-2 rounded"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block font-medium">Role</label>
                        <input
                            type="text"
                            name="role"
                            value={formData.role}
                            onChange={handleInputChange}
                            className="w-full border p-2 rounded"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block font-medium">Image</label>
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleInputChange}
                            className="w-full border p-2 rounded"
                        />
                    </div>
                    <LoadingButton
                        loading={loading}
                        text={editingMemberId ? "Update Member" : "Submit Member"}
                        loadingText={editingMemberId ? "Updating..." : "Submitting..."}
                        type="submit"
                    />
                </form>
            </Modal>
        </div>
    );
};

export default AdminTeamList;