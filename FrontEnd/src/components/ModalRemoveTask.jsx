import React from 'react';

export default function ModalRemoveTask({ task, onConfirm, onCancel }) {
    if (!task) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
                <h2 className="text-lg font-semibold mb-4">Confirmar Exclusão</h2>
                <p className="text-gray-700 mb-6">
                    Tem certeza que deseja excluir esta tarefa?
                </p>

                <div className="flex justify-around">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
                    >
                        Cancelar
                    </button>

                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
                    >
                        Excluir
                    </button>
                </div>
            </div>
        </div>
    );
}