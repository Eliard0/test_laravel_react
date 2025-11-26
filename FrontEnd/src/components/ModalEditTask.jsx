import React, { useState, useEffect } from 'react';

export default function ModalEditTask({ task, onSave, onCancel }) {
    const [newTitle, setNewTitle] = useState(task?.title || '');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (task) {
            setNewTitle(task.title);
            setError('');
        }
    }, [task]);

    if (!task) {
        return null;
    }

    const handleSave = async () => {
        setError('');
        
        if (newTitle.trim().length < 5) {
            setError('O título deve ter no mínimo 5 caracteres.');
            return;
        }

        setLoading(true);
        try {
            await onSave(task.id, newTitle.trim(), task.completed); 
            onCancel();
        } catch (err) {
            const errorMessage = err.response?.data?.message || "Erro ao salvar a tarefa.";
            setError(errorMessage);
        } 
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl w-96">
                <h2 className="text-xl font-semibold mb-4">Editar Tarefa</h2>

                {error && <p className="text-red-500 mb-3 text-sm">{error}</p>}

                <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Novo título da tarefa"
                    disabled={loading}
                />

                <div className="flex justify-end gap-3">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
                        disabled={loading}
                    >
                        Cancelar
                    </button>

                    <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg disabled:opacity-50"
                        disabled={loading || newTitle.trim() == task.title || newTitle.trim().length < 5}
                    >
                        {loading ? 'Salvando...' : 'Salvar Alterações'}
                    </button>
                </div>
            </div>
        </div>
    );
}