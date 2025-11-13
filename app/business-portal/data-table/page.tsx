'use client';

import { useState, useEffect } from 'react';
import { dataService, TableRow } from '../services/dataService';
import DataTable from '../components/DataTable';
import SearchFilter from '../components/SearchFilter';

export default function DataTablePage() {
  const [data, setData] = useState<TableRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const itemsPerPage = 10;

  useEffect(() => {
    loadTableData();
  }, [currentPage, searchTerm]);

  const loadTableData = async () => {
    setLoading(true);
    try {
      const result = await dataService.getTableData(currentPage, itemsPerPage, searchTerm);
      setData(result.data);
      setTotalItems(result.total);
    } catch (error) {
      console.error('Failed to load table data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleStatusFilter = (status: string) => {
    setStatusFilter(status);
    // In a real app, this would trigger a new API call with the filter
  };

  const filteredData = statusFilter === 'all' 
    ? data 
    : data.filter(item => item.status === statusFilter);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Data Management</h1>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            Export Data
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Add New
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <SearchFilter
        searchTerm={searchTerm}
        onSearch={handleSearch}
        statusFilter={statusFilter}
        onStatusFilter={handleStatusFilter}
      />

      {/* Data Table */}
      <div className="bg-white rounded-lg shadow-sm border">
        <DataTable
          data={filteredData}
          loading={loading}
          currentPage={currentPage}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <h3 className="text-sm font-medium text-gray-600">Total Records</h3>
          <p className="text-2xl font-bold text-gray-900">{totalItems}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <h3 className="text-sm font-medium text-gray-600">Active Records</h3>
          <p className="text-2xl font-bold text-green-600">
            {data.filter(item => item.status === 'active').length}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <h3 className="text-sm font-medium text-gray-600">Pending Records</h3>
          <p className="text-2xl font-bold text-yellow-600">
            {data.filter(item => item.status === 'pending').length}
          </p>
        </div>
      </div>
    </div>
  );
}
