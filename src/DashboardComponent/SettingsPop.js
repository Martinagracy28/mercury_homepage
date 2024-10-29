import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import akar_icons_question from '../assets/images/Dashboard/akar_icons_question.svg';

const SettingsPop = ({ SettingsClose, Settings }) => {
    return (
        <>
            <Modal
                open={Settings}
                onClose={SettingsClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className='modal_Box_main'>
                    <Box className='modal_Box responsive_pop'>
                        <div className='ConnectPop_main'>
                            <div className='swap_tokens_pop_main'>
                                <div className='ConnectPop_Close_btn'>
                                    <a href="#0" onClick={SettingsClose}>
                                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 0.5C8.02219 0.5 6.08879 1.08649 4.4443 2.1853C2.79981 3.28412 1.51809 4.8459 0.761209 6.67317C0.00433284 8.50043 -0.193701 10.5111 0.192152 12.4509C0.578004 14.3907 1.53041 16.1725 2.92894 17.5711C4.32746 18.9696 6.10929 19.922 8.0491 20.3079C9.98891 20.6937 11.9996 20.4957 13.8268 19.7388C15.6541 18.9819 17.2159 17.7002 18.3147 16.0557C19.4135 14.4112 20 12.4778 20 10.5C20 9.18678 19.7413 7.88642 19.2388 6.67317C18.7363 5.45991 17.9997 4.35752 17.0711 3.42893C16.1425 2.50035 15.0401 1.76375 13.8268 1.2612C12.6136 0.758658 11.3132 0.5 10 0.5V0.5ZM10 18.5C8.41775 18.5 6.87104 18.0308 5.55544 17.1518C4.23985 16.2727 3.21447 15.0233 2.60897 13.5615C2.00347 12.0997 1.84504 10.4911 2.15372 8.93928C2.4624 7.38743 3.22433 5.96197 4.34315 4.84315C5.46197 3.72433 6.88743 2.9624 8.43928 2.65372C9.99113 2.34504 11.5997 2.50346 13.0615 3.10896C14.5233 3.71447 15.7727 4.73984 16.6518 6.05544C17.5308 7.37103 18 8.91775 18 10.5C18 12.6217 17.1572 14.6566 15.6569 16.1569C14.1566 17.6571 12.1217 18.5 10 18.5V18.5Z" fill="#29ABE2" />
                                            <path d="M12.7099 7.78994C12.617 7.69621 12.5064 7.62182 12.3845 7.57105C12.2627 7.52028 12.132 7.49414 11.9999 7.49414C11.8679 7.49414 11.7372 7.52028 11.6154 7.57105C11.4935 7.62182 11.3829 7.69621 11.2899 7.78994L9.99994 9.08994L8.70994 7.78994C8.52164 7.60164 8.26624 7.49585 7.99994 7.49585C7.73364 7.49585 7.47824 7.60164 7.28994 7.78994C7.10164 7.97824 6.99585 8.23364 6.99585 8.49994C6.99585 8.76624 7.10164 9.02164 7.28994 9.20994L8.58994 10.4999L7.28994 11.7899C7.19621 11.8829 7.12182 11.9935 7.07105 12.1154C7.02028 12.2372 6.99414 12.3679 6.99414 12.4999C6.99414 12.632 7.02028 12.7627 7.07105 12.8845C7.12182 13.0064 7.19621 13.117 7.28994 13.2099C7.3829 13.3037 7.4935 13.3781 7.61536 13.4288C7.73722 13.4796 7.86793 13.5057 7.99994 13.5057C8.13195 13.5057 8.26266 13.4796 8.38452 13.4288C8.50638 13.3781 8.61698 13.3037 8.70994 13.2099L9.99994 11.9099L11.2899 13.2099C11.3829 13.3037 11.4935 13.3781 11.6154 13.4288C11.7372 13.4796 11.8679 13.5057 11.9999 13.5057C12.132 13.5057 12.2627 13.4796 12.3845 13.4288C12.5064 13.3781 12.617 13.3037 12.7099 13.2099C12.8037 13.117 12.8781 13.0064 12.9288 12.8845C12.9796 12.7627 13.0057 12.632 13.0057 12.4999C13.0057 12.3679 12.9796 12.2372 12.9288 12.1154C12.8781 11.9935 12.8037 11.8829 12.7099 11.7899L11.4099 10.4999L12.7099 9.20994C12.8037 9.11698 12.8781 9.00638 12.9288 8.88452C12.9796 8.76266 13.0057 8.63195 13.0057 8.49994C13.0057 8.36793 12.9796 8.23722 12.9288 8.11536C12.8781 7.9935 12.8037 7.8829 12.7099 7.78994V7.78994Z" fill="#29ABE2" />
                                        </svg>
                                    </a>
                                </div>
                                <div className='swap_tokens_list'>
                                    <h4>Settings</h4>
                                    <div className='Settings_Pop_main'>
                                        {/* <div className='Swap_after_fee'>
                                            <span className='settings_span'>Swap</span>
                                            <p className='settings_p'>Rate (after fee) <img src={akar_icons_question} alt="akar_icons_question" /></p>
                                            <ul>
                                                <li>
                                                    <input type="radio" id="test1" name="ss" />
                                                    <label htmlFor="test1">0.05%</label>
                                                </li>
                                                <li>
                                                    <input type="radio" id="test2" name="ss" defaultChecked />
                                                    <label htmlFor="test2">1</label>
                                                </li>
                                                <li>
                                                    <input type="radio" id="test3" name="ss" />
                                                    <label htmlFor="test3"><span className='settings_span_padding'>0.2</span> %</label>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='Swap_after_fee'>
                                            <span className='settings_span'>Withdrawal</span>
                                            <p className='settings_p'>Slippage Tolerance <img src={akar_icons_question} alt="akar_icons_question" /></p>
                                            <ul>
                                                <li>
                                                    <input type="radio" id="test4" name="fav_language1"  />
                                                    <label htmlFor="test4">0.05%</label>
                                                </li>
                                                <li>
                                                    <input type="radio" id="test5" name="fav_language1"  defaultChecked />
                                                    <label htmlFor="test5">1</label>
                                                </li>
                                                <li>
                                                    <input type="radio" id="test6" name="fav_language1"  />
                                                    <label htmlFor="test6"><span className='settings_span_padding'>2.0</span> %</label>
                                                </li>
                                            </ul>
                                        </div> */}
                                        <div className='Swap_after_fee'>
                                            <p className='settings_p'><span>Withdrawal In Other Tokens</span> <img src={akar_icons_question} alt="akar_icons_question" /></p>
                                            <ul>
                                                <li>
                                                    <input type="radio" id="test7" name="fav_language2" />
                                                    <label htmlFor="test7">On</label>
                                                </li>
                                                <li>
                                                    <input type="radio" id="test8" name="fav_language2"  defaultChecked />
                                                    <label htmlFor="test8">Off</label>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='Swap_after_fee'>
                                            <span className='settings_span'>Transaction</span>
                                            <p className='settings_p'><span>Transaction Deadline</span> <img src={akar_icons_question} alt="akar_icons_question" /></p>
                                            <div className='settings_padding_row'>
                                               {/* <span className='settings_span_padding'>30</span> */}
                                                <input type="text" placeholder='30' className='settings_span_padding'/>
                                                <p>Minutes</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Box>
                </div>
            </Modal>
        </>
    )
}

export default SettingsPop;