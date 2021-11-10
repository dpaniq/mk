import Cookie from 'js-cookie'
import React, { useState, useEffect, useContext } from 'react'
const axios = require('axios');
import Swal from 'sweetalert2'

import { axiosPost } from '../../utils/axios'
import Contexts from '../../contexts/_contexts'

import { Teams } from '../teams/Teams'

export const ContentHome = () => {
    return (<Teams />)
}