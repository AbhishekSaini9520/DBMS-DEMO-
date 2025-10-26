// API Service Layer for Blood Bank Management System
const API_BASE_URL = 'http://localhost:5000/api'

class ApiService {
  async getAllDonors() {
    const response = await fetch(`${API_BASE_URL}/donors`, {
      headers: this.getAuthHeaders()
    })
    return response.json()
  }

  async getDonorProfile() {
    const response = await fetch(`${API_BASE_URL}/donors/profile`, {
      headers: this.getAuthHeaders()
    })
    return response.json()
  }

  async createDonor(donorData) {
    const response = await fetch(`${API_BASE_URL}/donors`, {
      method: 'POST',
      headers: this.getAuthHeaders(),
      body: JSON.stringify(donorData)
    })
    return response.json()
  }

  async addBloodToInventory(bloodData) {
    const response = await fetch(`${API_BASE_URL}/inventory`, {
      method: 'POST',
      headers: this.getAuthHeaders(),
      body: JSON.stringify(bloodData)
    })
    return response.json()
  }

  // Blood Request APIs
  async getAllRequests() {
    const response = await fetch(`${API_BASE_URL}/requests`, {
      headers: this.getAuthHeaders()
    })
    return response.json()
  }

  async updateRequestStatus(requestId, status) {
    const response = await fetch(`${API_BASE_URL}/requests/${requestId}/status`, {
      method: 'PUT',
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ status })
    })
    return response.json()
  }

  async createDonationRequest(donationData) {
    const response = await fetch(`${API_BASE_URL}/donations/request`, {
      method: 'POST',
      headers: this.getAuthHeaders(),
      body: JSON.stringify(donationData)
    })
    return response.json()
  }

  async createDonation(donationData) {
    const response = await fetch(`${API_BASE_URL}/donations`, {
      method: 'POST',
      headers: this.getAuthHeaders(),
      body: JSON.stringify(donationData)
    })
    return response.json()
  }

}

// Create and export a singleton instance
const apiService = new ApiService()
export default apiService
