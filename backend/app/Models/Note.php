<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
   protected $fillable = [
    'title',
    'faculty',
    'subject',
    'semester',
    'description',  
    'file',
]; }