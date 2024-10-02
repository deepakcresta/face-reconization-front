import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {StudentService} from "../../services/student.service";
import {Router} from "@angular/router";
import {StaffService} from "../../services/staff.service";

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  image: File | null = null;
  imagePreview: string | null = null;
  submitted: boolean = false;
  images: any[] = []; // Using any type for simplicity

  constructor(
    private router: Router,
    private staffService: StaffService
  ) {}

  ngOnInit(): void {
    this.loadImages()
  }

  // Handle image file selection
  onImageChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.image = file;

      // Create a preview of the image
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  // Submit the form with the image
  onSubmit(): void {
    this.submitted = true;

    // Check if an image is selected
    if (!this.image) {
      console.error('No image selected');
      return;
    }

    const formData = new FormData();
    // Add the image file
    formData.append('file', this.image);

    // Call the service to upload the image
    this.staffService.uploadImage(formData).subscribe({
      next: (response) => {
        console.log('Image uploaded successfully:', response);
        this.router.navigate(['/features/add-staff']);
      },
      error: (error) => {
        console.error('Error uploading image:', error);
      }
    });
  }

  loadImages(): void {
    this.staffService.getAllImages().subscribe(
      (data: any[]) => { // Using any type here
        console.log('data',data)
        this.images = data;
      },
      (error) => {
        console.error('Error fetching images', error);
      }
    );
  }

}
