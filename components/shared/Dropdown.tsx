import React, { startTransition, useEffect, useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Category, { ICategory } from '@/lib/database/models/category.model'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { createCategory, getAllCategories } from '@/lib/actions/category.actions'


type DropdownProps = {
  value: string
  onChangeHandler?: () => void
}

const Dropdown = ({ value, onChangeHandler }:DropdownProps) => {
  const [categories, setCategories] = useState<ICategory[]>([
    // { _id: '1', name: 'Category 1'},
    //     { _id: '2', name: 'Category 2'},
  ])
  const [newCategory, setNewCategory] = useState('')

  //  THIS IS TO HANDLE THE CREATION OF THE CATEGORIES

  const handleAddCategory = () => {
    createCategory({ 
      categoryName: newCategory.trim()
    })
      .then((category) => {
        setCategories((prevState) => [...prevState, category])
      })
  }

  // THIS IS TO FETCH ALL THE USER CREATED CATEGORIES 

  useEffect(() => {
    const getCategories = async () => {
      const categoryList = await getAllCategories();

      categoryList && setCategories(categoryList as ICategory[])
    }

    getCategories();
  })


  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>

        {categories.length > 0 && categories.map((category) => (
          <SelectItem key={category._id} value={category._id} className='selcet-item p-regular-14'>
              {category.name}
          </SelectItem>
        ))}

        <Dialog>
          <DialogTrigger className='p-medium-14 flex w-full rounded-sm py-3 pl-8 text-primary-500 hover:bg-primary-50 focus:text-primary-500'>Add New Category</DialogTrigger>
          <DialogContent className='bg-white'>
            <DialogHeader>
              <DialogTitle>New Category</DialogTitle>
              <DialogDescription>
                <Input type="text" placeholder='Category name' className='input-field mt-3' onChange={(e) => setNewCategory(e.target.value)}/>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button type="submit" onClick={() => startTransition(handleAddCategory)}>Add</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>


        {/* <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem> */}
      </SelectContent>
    </Select>

  )
}

export default Dropdown