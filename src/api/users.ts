import request from '@/utils/request'
import axios from 'axios'
import { UsersData } from "./types"
export const defaultUsersData: UsersData = {
  user_id: '0',//yonghu id
  user_name: '',
  password: '',
  role:'2',//用户角色
  address:'',
  user_data:new Date('2023-07-25T12:34:56Z')
}

export const getUsers = (params: any) =>
  request({
    url: '/show',
    method: 'get',
    params
  })

export const getUserInfo = (data: any) =>
  request({
    url: '/init',
    method: 'post',
    data
  })

export const getUserByName = (username: string) =>
  request({
    url: `/users/${username}`,
    method: 'get'
  })

export const updateUser = (params: any) =>
  request({
    url: '/modify',
    method: 'post',
    params
  })

export const deleteUser = (params:any) =>
  request({
    url: '/delete',
    method: 'delete',
    params
  })

export const login = (data: any) =>
  request({
    url: '/login',
    method: 'post',
    data
  })

export const logout = () =>
  request({
    url: '/users/logout',
    method: 'post'
  })

export const register = (data: any) =>
  request({
    url: '/register',
    method: 'post',
    data
  })
