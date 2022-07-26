import { Camera, CameraAltOutlined, EditOutlined, LocalOfferOutlined, LocationOn, MoreHorizOutlined, PhotoAlbumOutlined, TagFaces } from '@material-ui/icons'
import React from 'react'
import img from '../Assests/pro.jpg'
import '../App.css'


const Upload = () => {
  return (
    <div className='mt-5 flex flex-col bg-white border-2 rounded-xl upload border-blue-200'>


            <div
                className='rounded-xl  w-full  flex flex-row '>

          
                  
                          <div className='cursor-pointer flex border-r-2  w-2/6 items-center justify-center 
                          rounded-tr-lg
                          py-3'> 
                              <EditOutlined className='upload-icons' />
                              <p 
                                className='font-mono font-bold ' > Publish </p>
                          </div>
             
               
                          <div className='cursor-pointer flex  w-2/6 
                            bg-stone-100
                          border-b-2 items-center
                           justify-center'> 
                              <PhotoAlbumOutlined className='upload-icons'/>
                              <p className='font-mono font-bold '> Photo </p>
                          </div>
             
               
                          <div className='cursor-pointer rounded-r-xl 
                          border-b-2 bg-stone-100
                          flex items-center flex-row   w-2/6 justify-center'> 
                              <Camera className='upload-icons'/>
                              <p className='font-mono font-bold '> Video  </p>
                          </div>
              </div>


                    <div 
                      className='flex flex-row mt-4 '>
                    <img src={img} alt=""  className='border-2 m-1 border-black rounded-full h-10 w-10 object-cover'/>
                    <textarea 
                      className='w-full textarea m-2 text-md'
                        placeholder='What is on your Mind ? '
                          rows='4'>
                                
                    </textarea>
                    </div>


              <div 
                className='flex flex-row p-2  border-t-2 justify-between'>
                      <div    className='flex flex-row space-x-2'>
                                  <div className='flex 
                                  flex-row items-center 
                                  rounded-full bg-stone-200 
                                  cursor-pointer p-2'>
                                    <CameraAltOutlined className='media-icons' />
                                      <p className='font-thin font-serif  ml-1' >  Media </p>
                                    </div>
            
            
                                    <div className='flex 
                                    flex-row items-center 
                                    rounded-full bg-stone-200 
                                    cursor-pointer p-2'>
                                      <TagFaces className='media-icons' />
                                      <p className='font-thin font-serif  ml-1'> Activity </p>
                                    </div>
            
                                    <div className='flex 
                                    flex-row items-center 
                                    rounded-full bg-stone-200 
                                    cursor-pointer p-2'>
                                      <LocationOn className='media-icons' />
                                      <p className='font-thin font-serif  ml-1'> Location </p>
                                    </div>
            
                                    <div className='flex 
                                    flex-row items-center 
                                    rounded-full bg-stone-200 
                                    cursor-pointer p-2'>
                                      <LocalOfferOutlined className='media-icons' />
                                      <p className='font-thin font-serif  ml-1'> Tag Friends </p>
                                    </div>
            
                                    <div className='flex 
                                    flex-row items-center 
                                    rounded-full bg-stone-200 
                                    cursor-pointer p-2'>
            
                                      <MoreHorizOutlined />
                                    </div>
            
            
                      </div>


                        <div 
                          className='p-2 
                          btn float-right 
                          bg-blue-500  cursor-pointer 
                          rounded-md text-white font-mono font-bold 
                            '>
                            <button className=''>Post</button>
                        </div>


              </div>
    </div>
  )
}

export default Upload